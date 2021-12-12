import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService, private router: Router) { }
  onActive(){
    window.scroll(0,0);
  }
  ngOnInit(): void {
    if (this.authentificationService.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

}
