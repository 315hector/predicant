import {Component, OnInit, VERSION} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  authForm = this.fb.group({
    remember: false,
    login: [null, Validators.required],
    pass: [null, Validators.required]
  });

  // constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log('init component AuthorizationComponent');
  }

  onSubmit() {
    // alert('Thanks!');
    alert('Извините сервис временно недоступен!');
    console.log(VERSION);
  }
}
