import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['user']);
  }

  login({ email, password }: any) {
    if (email === 'admin@outlook.com' && password === 'admin') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      this.router.navigate(['/admin']);
    }
  }
  
}
