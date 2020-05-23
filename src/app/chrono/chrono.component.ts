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

  sendForm: FormGroup;
  notesForm: FormGroup;

  data: Message[] = [];
  notes: Note[] = [];

  date = new Date();
  releaseDate = {day: this.date.getDate(), month: this.date.getMonth() + 1, year: this.date.getFullYear()};
  gh_key: string;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private as: AlertService,
    private modalService: NgbModal,
    private analytics: AngularFireAnalytics,
  ) {
  }

  ngOnInit() {
    this.api.gh_key.subscribe(k => this.gh_key = k);

    this.sendForm = this.formBuilder.group({
      authorName: ['', Validators.compose([Validators.required])],
      pass: ['', Validators.compose([Validators.required])],
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

  sendNote() {
    let pass = this.sendForm.controls.pass.value;
    let title = this.sendForm.controls.title.value;
    let text = this.sendForm.controls.text.value;
    let release = this.sendForm.controls.release.value;

    console.log(release);

    let date = new Date();
    date.setDate(release['day']);
    date.setMonth(release['month'] - 1);
    date.setFullYear(release['year']);

    this.api.sendNote(pass, title, text, date.getTime())
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
