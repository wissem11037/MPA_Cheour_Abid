import { Injectable } from '@angular/core';
import { SignInData } from '../Models/sign-in-data';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {



  Users: SignInData[] = [
    new SignInData('user', 'password', false),
    new SignInData('admin', 'admin', true)
  ];

  currentUser: string = "";
  userState : boolean = false as boolean;


  isAuthenticated(): boolean {
    return this.currentUser != undefined;
  }
  checkCredentials(signInData: SignInData): boolean {
    return (this.getUser(signInData.username) != undefined) && (this.getPassword(signInData.password) != undefined);
  }

  getUser(username: string) {
    return this.Users.find(user => user.username == username);
  }
  getPassword(password: string) {
    return this.Users.find(user => user.password == password);
  }
  constructor() { }
}
