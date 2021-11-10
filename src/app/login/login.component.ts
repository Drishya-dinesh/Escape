import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  staticCreds = [
    {
      email: '2',
      password: '2',
    },
    {
      email: '1',
      password: '1',
    },
  ];

  loginObject = {
    email: '',
    password: '',
    commonErrorMessage: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    const validation = this.validateLogin();
    if (validation.validFlag) {
      this.loginObject.commonErrorMessage = '';
      this.router.navigate(['home']);
    } else {
      this.loginObject.commonErrorMessage = validation.message;
    }
  }
  createAccount() {
    this.router.navigate(['login/create']);
  }

  validateLogin() {
    const validation = {
      validFlag: true,
      message: '',
    };

    if (this.loginObject.email.length === 0) {
      validation.validFlag = false;
      validation.message = 'email error';
      return validation;
    } else if (this.loginObject.password.length === 0) {
      validation.validFlag = false;
      validation.message = 'pass error';
      return validation;
    } else {
      const isUserPresent = this.staticCreds.some(
        (item) =>
          item.email === this.loginObject.email &&
          item.password === this.loginObject.password
      );
      if (!isUserPresent) {
        validation.validFlag = false;
        validation.message = ' error';
        return validation;
      }
    }
    return validation;
  }
}
