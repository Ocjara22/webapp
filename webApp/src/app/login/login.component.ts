import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

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
    //console.log(this.loginForm);
    let user: string = this.loginForm.value.name;
    let pass: string = this.loginForm.value.password;

    this.serviceLogin.login(user, pass).then(
      response => {
        sessionStorage.setItem("token", response.sessionTokenBck);
        //console.log(response.sessionTokenBck);
        this.router.navigate(['grid']);
      }
    ).catch(err => {
      console.log("Hubo un problema para conectarse al servicio de login");
    });
  }

}
