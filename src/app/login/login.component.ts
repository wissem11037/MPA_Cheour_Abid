import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInData } from '../Models/sign-in-data';
import { AuthentificationService } from '../Services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  SignInForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authentificationService: AuthentificationService, private router:Router) { }

  Login() {
    if (this.authentificationService.checkCredentials(this.SignInForm.value)) {
      this.authentificationService.currentUser = this.SignInForm.value.username;
      this.authentificationService.userState = this.authentificationService.getUser(this.authentificationService.currentUser)?.isAdmin!;
      if (this.authentificationService.userState){
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    }
  }

  ngOnInit(): void {
    this.SignInForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

}
