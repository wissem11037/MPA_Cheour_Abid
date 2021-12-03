import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-voyage',
  templateUrl: './add-voyage.component.html',
  styleUrls: ['./add-voyage.component.css']
})
export class AddVoyageComponent implements OnInit {

  VoyageForm: FormGroup = new FormGroup({});

 today = new Date();
 day = this.today.getDay();
 month = this.today.getMonth();
 year = this.today.getFullYear();

  constructor(private fb:FormBuilder) {

   }

  ngOnInit(): void {
    this.VoyageForm = this.fb.group({
      libelle:[''],
      image:[''],
      prix:[0],
      nouveau:[false],
      depart:[new Date(this.year, this.month, this.day)],
      arrive:[new Date(this.year, this.month, this.day)],
      description:[''],
      sejour:this.fb.array([])
    });
  }

}
