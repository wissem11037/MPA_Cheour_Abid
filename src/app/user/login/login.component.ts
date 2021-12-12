import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  SignInForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authentificationService: AuthentificationService, private router:Router) { }

  onSubmit(){
    if (this.SignInForm.valid) {
      this.authentificationService.login(this.SignInForm.value);
    }
  }

  ngOnInit(): void {
    this.SignInForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

}
