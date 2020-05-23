import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService, encryptP} from '../api.service';
import {AlertService} from '../alert.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {kebabToCamelCase} from 'codelyzer/util/utils';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  setupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private as: AlertService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.setupForm = this.formBuilder.group({
      api_key: ['d61653e0271a4c41a7cc04b77679ebc46f8a0e4f', Validators.compose([Validators.required])],
      pass: ['', Validators.compose([Validators.required])],
    });
  }

  setupGH() {
    let pass = this.setupForm.controls.pass.value;
    let api_key = this.setupForm.controls.api_key.value;

    this.api.saveKeyToGH(pass, api_key);
  }
}
