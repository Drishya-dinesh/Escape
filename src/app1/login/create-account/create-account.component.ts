import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  accountObject = {
    email: '',
    fullName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    commonErrorMessage: '',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}
  login() {
    this.router.navigate(['login']);
  }
  register() {
    const validation = this.validate();
    if (validation.validFlag) {
      this.accountObject.commonErrorMessage = '';
      this.router.navigate(['home']);
    } else {
      this.accountObject.commonErrorMessage = validation.message;
    }
  }
  validate() {
    const validation = {
      validFlag: true,
      message: '',
    };
    if (this.accountObject.email.length === 0) {
      validation.validFlag = false;
      validation.message = 'email error';
      return validation;
    } else if (this.accountObject.fullName.length === 0) {
      validation.validFlag = false;
      validation.message = 'Full Name error';
      return validation;
    } else if (this.accountObject.phoneNumber.length === 0) {
      validation.validFlag = false;
      validation.message = 'Phone Number error';
      return validation;
    } else if (this.accountObject.password.length === 0) {
      validation.validFlag = false;
      validation.message = 'password error';
      return validation;
    } else if (this.accountObject.confirmPassword.length === 0) {
      validation.validFlag = false;
      validation.message = 'confirm Password error';
      return validation;
    } else if (
      this.accountObject.password !== this.accountObject.confirmPassword
    ) {
      validation.validFlag = false;
      validation.message = 'mismatch error';
      return validation;
    }
    return validation;
  }
}
