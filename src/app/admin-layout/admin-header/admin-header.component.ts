import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService) { }

  logout() {
    this.authentificationService.logout();
  }

  ngOnInit(): void {
  }

}
