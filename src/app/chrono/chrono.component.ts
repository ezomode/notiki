import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ApiService, Message} from '../api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../alert.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireAnalytics} from '@angular/fire/analytics';

export class Note {
  id: number;
  title: string;
  text: string;
  authorName: string;
  created: Date;
  release: Date;
}

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css']
})
export class ChronoComponent implements OnInit {

  authorForm: FormGroup;
  readerForm: FormGroup;
  sendForm: FormGroup;
  notesForm: FormGroup;

  data: Message[] = [];
  notes: Note[] = [];

  date = new Date();
  releaseDate = {day: this.date.getDate(), month: this.date.getMonth() + 1, year: this.date.getFullYear()};

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private as: AlertService,
    private modalService: NgbModal,
    private analytics: AngularFireAnalytics,
  ) {
  }

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      name: ['', Validators.compose([])],
      pass: ['', Validators.compose([Validators.required])],
    });

    this.readerForm = this.formBuilder.group({
      name: ['', Validators.compose([])],
      readerPass: ['', Validators.compose([Validators.required])],
      authorPass: ['', Validators.compose([Validators.required])],
    });

    this.sendForm = this.formBuilder.group({
      authorPass: ['', Validators.compose([Validators.required])],
      readerPass: ['', Validators.compose([Validators.required])],
      // pass: ['', Validators.compose([Validators.required])],
      title: ['', Validators.compose([Validators.required])],
      text: ['', Validators.compose([Validators.required])],
      release: ['', Validators.compose([Validators.required])],
    });

    this.notesForm = this.formBuilder.group({
      pass: ['', Validators.compose([Validators.required])]
    });

    this.api.getMessages()
      .subscribe(res => {
        this.data = res;
      }, err => {
        console.log(err);
        this.as.error('Error: ' + err['message']);
      });
  }

  createAuthor() {
    let name = this.authorForm.controls.name.value;
    let pass = this.authorForm.controls.pass.value;

    this.api.createAuthor(name, pass)
      .subscribe(
        (res) => {
          console.log('CREATED: ' + JSON.stringify(res));
          this.as.success('Created');
          this.analytics.logEvent('author');
        },
        (err) => {
          console.log(err);
          this.as.error('Error: ' + err['message']);
        });
  }

  createReader() {
    let name = this.readerForm.controls.name.value;
    let readerPass = this.readerForm.controls.readerPass.value;
    let authorPass = this.readerForm.controls.authorPass.value;

    this.api.createReader(name, readerPass, authorPass)
      .subscribe(
        (res) => {
          console.log('CREATED: ' + JSON.stringify(res));
          this.as.success('Created');
          this.analytics.logEvent('reader');
        },
        (err) => {
          console.log(err);
          this.as.error('Error: ' + err['message']);
        });
  }

  sendNote() {
    let authorPass = this.sendForm.controls.authorPass.value;
    let readerPass = this.sendForm.controls.readerPass.value;
    // let pass = this.sendForm.controls.pass.value;
    let title = this.sendForm.controls.title.value;
    let text = this.sendForm.controls.text.value;
    let release = this.sendForm.controls.release.value;

    console.log(release);

    let date = new Date();
    date.setDate(release['day']);
    date.setMonth(release['month'] - 1);
    date.setFullYear(release['year']);

    this.api.sendNote(authorPass, readerPass, title, text, date.getTime())
      .subscribe(
        (res) => {
          console.log('CREATED: ' + JSON.stringify(res));
          this.as.success('Sent');
          this.analytics.logEvent('note');
        },
        (err) => {
          console.log(err);
          this.as.error('Error: ' + err['message']);
        });
  }

  @ViewChild('content')
  private content: TemplateRef<any>;

  async getNotes() {
    let pass = this.notesForm.controls.pass.value;

    this.notes = [];
    this.api.getNotes(pass)
      .subscribe(note => {
          this.notes.push(note);
          console.log('NOTE: ' + JSON.stringify(note));
          this.analytics.logEvent('getNotes');
        },
        err => {
          console.log(err);
          // this.as.error('Error: ' + JSON.stringify(err));
          this.as.error('Error: ' + err['message']);
        },
        () => {
          if (this.notes.length > 0) {
            this.modalService.open(this.content, {size: 'xl'});
          }
        });
  }
}
