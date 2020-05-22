import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService, Message} from '../api.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-message-add',
  templateUrl: './message-add.component.html',
  styleUrls: ['./message-add.component.css']
})
export class MessageAddComponent implements OnInit {

  messageForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private user: UserService,
  ) {
  }


  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      txt: ['', Validators.compose([Validators.required])],
    });
  }

  addMessage() {
    const m = new Message();

    m.age = new Date().getTime() - this.user.bd();
    m.date = new Date();
    m.text = this.messageForm.controls.txt.value;

    this.api.addMessage(m)
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
        });
  }
}
