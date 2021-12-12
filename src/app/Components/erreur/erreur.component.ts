import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erreur',
  templateUrl: './erreur.component.html',
  styleUrls: ['./erreur.component.css']
})
export class ErreurComponent implements OnInit {

  constructor(private router:Router) { }

  return(){
    this.router.navigate(['']);
  }
  ngOnInit(): void {
  }

}
