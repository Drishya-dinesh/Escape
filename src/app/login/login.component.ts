import {Component, OnInit} from '@angular/core';
import {AppConstantsService} from '../shared/constants/app-constants.service';
import {Router} from '@angular/router';

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

  pageType: PageType = 'login';

  public loginObject = {
    email: '',
    password: '',
  };
  loginErrorMessage = '';

  registerObject = {
    fullName: {
      value: '',
      errorMessage: '',
    },
    email: {
      value: '',
      errorMessage: '',
    },
    phone: {
      value: '',
      errorMessage: '',
    },
    password: {
      value: '',
      errorMessage: '',
    },
    confirmPassword: {
      value: '',
      errorMessage: '',
    },
    errorFlag: false
  };

  constructor(public constants: AppConstantsService, private router: Router) {
  }

  ngOnInit(): void {
    // if (JSON.parse(localStorage.getItem('isLoggedIn') || '')) {
    //   this.router.navigate(['home']);
    // }
  }

  login() {
    // localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['home']);
    // this.loginErrorMessage = this.validateLogin().message;
  }

  register() {
    // this.pageType = 'login';
    this.validateRegister();
    if (!this.registerObject.errorFlag) {
      this.router.navigate(['home']);
    }
  }

  gotoRegister() {
    this.pageType = 'register';
  }

  backToLogin() {
    this.pageType = 'login';
  }

  validateLogin() {
    const validation = {
      validFlag: true,
      message: '',
    };

    if (
      this.loginObject.email.length === 0 &&
      this.loginObject.password.length === 0
    ) {
      validation.validFlag = false;
      validation.message = 'Please enter username and password';
      return validation;
    } else if (this.loginObject.email.length === 0) {
      validation.validFlag = false;
      validation.message = 'Please enter username';
      return validation;
    } else if (this.loginObject.password.length === 0) {
      validation.validFlag = false;
      validation.message = 'Please enter password';
      return validation;
    } else {
      const isUserPresent = this.staticCreds.some(
        (item) =>
          item.email === this.loginObject.email &&
          item.password === this.loginObject.password
      );
      if (!isUserPresent) {
        validation.validFlag = false;
        validation.message = 'Login faild, Please check entered values!';
        return validation;
      }
    }
    return validation;
  }

  validateRegister() {
    if (this.registerObject.fullName.value.trim().split(/\s+/).length < 2) {
      this.registerObject.fullName.errorMessage =
        'Please enter your full name.';
      this.registerObject.errorFlag = true;

    } else {
      this.registerObject.fullName.errorMessage = '';
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.registerObject.email.value.toLocaleLowerCase())) {
      this.registerObject.email.errorMessage = 'Please enter valid email ID';
      this.registerObject.errorFlag = true;
    } else {
      this.registerObject.email.errorMessage = '';
      this.registerObject.errorFlag = false;
    }

    if (this.registerObject.phone.value.length !== 11) {
      this.registerObject.phone.errorMessage =
        'Please enter valid phone number';
      this.registerObject.errorFlag = true;
    } else {
      this.registerObject.phone.errorMessage = '';
      this.registerObject.errorFlag = false;
    }

    if (this.registerObject.password.value.length < 8) {
      this.registerObject.password.errorMessage =
        'Password should be at least 8 characters';
      this.registerObject.errorFlag = true;
    } else if (this.registerObject.password.value.length === 0) {
      this.registerObject.password.errorMessage = 'Please enter password';
      this.registerObject.errorFlag = true;

    } else {
      this.registerObject.password.errorMessage = '';
      this.registerObject.errorFlag = false;
    }
    if (this.registerObject.confirmPassword.value.length === 0) {
      this.registerObject.confirmPassword.errorMessage =
        'Please enter password';
      this.registerObject.errorFlag = true;

    } else if (
      !this.registerObject.password.errorMessage &&
      this.registerObject.password.value !==
      this.registerObject.confirmPassword.value
    ) {
      this.registerObject.confirmPassword.errorMessage = 'Password mismatch';
      this.registerObject.errorFlag = true;
    } else {
      this.registerObject.confirmPassword.errorMessage = '';
      this.registerObject.errorFlag = false;
    }
  }
}

export type PageType = 'login' | 'register';
