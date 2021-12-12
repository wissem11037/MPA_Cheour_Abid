import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../Services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class BackOfficeGuard implements CanActivate {
  constructor(private authentificationService: AuthentificationService,private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authentificationService.isLoggedIn()) {
        this.router.navigate(['/login']);
      }
      return this.authentificationService.isLoggedIn();
    }
}
