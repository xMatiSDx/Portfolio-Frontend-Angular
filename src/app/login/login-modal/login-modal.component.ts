import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

  login = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(public activeModal:NgbActiveModal, private formBuilder: FormBuilder) {}

}
