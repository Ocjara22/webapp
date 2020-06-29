import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseLogin } from '../models/responselogin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  res: ResponseLogin;
  constructor(
    private serviceLogin: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: [''],
      password: ['']
    });
  }

  onSubmit(): void {

    let user: string = this.loginForm.value.name;
    let pass: string = this.loginForm.value.password;

    this.serviceLogin.login(user, pass).subscribe(
      response => {
        this.res = response
        sessionStorage.setItem("token", this.res.sessionTokenBck);
        this.router.navigate(['grid']);
      }
    );
  }

}
