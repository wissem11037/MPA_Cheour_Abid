import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VoyageService } from 'src/app/Services/voyage.service';

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

  constructor(private fb: FormBuilder,private voyageService:VoyageService) { }

  get destination() {
    return this.VoyageForm.get('destination') as FormArray;
  }
  get ServicesNonInclus() {
    return this.VoyageForm.get('ServicesNonInclus') as FormArray;
  }


  get dateDepart() {
    return this.VoyageForm.get('dateDepart');
  }
  get dateArrive() {
    return this.VoyageForm.get('dateArrive');
  }

  getDate() {
    let Time = this.dateArrive?.value.getTime() - this.dateDepart?.value.getTime();
    let Days = (Time / (1000 * 3600 * 24))+1;
    return Days;
  }

  setUpDestination() {
    for (let i = 0; i < this.getDate(); i++) {
      this.addDestination(i + 1);
    }
  }

  addServicesNonInclus(){
    this.ServicesNonInclus.push(this.fb.control(''));
  }

  addDestination(num: number) {
    let destinationForm = this.fb.group({
      nbJour: [num,],
      destination: ['free day'],
      photo: ['test.png'],
      description: ['free day']
    });
    this.destination.push(destinationForm);
  }

  onReset(){
    this.VoyageForm.reset({
      libelle: [''],
      photo: [''],
      prix: [0],
      nouveau: [false],
      dateDepart: [new Date(this.year, this.month, this.day)],
      dateArrive: [new Date(this.year, this.month, this.day)],
      destination: this.fb.array([
      ]),
      ServicesNonInclus: this.fb.array([
      ]),
      description: ['']
    });
    this.destination.clear();
    this.ServicesNonInclus.clear();
  }

  onSubmitForm(){
    this.voyageService.addVoyage(this.VoyageForm.value)
    .subscribe();
  }

  ngOnInit(): void {
    this.VoyageForm = this.fb.group({
      libelle: ['',Validators.required],
      photo: ['',Validators.required],
      prix: [,Validators.required],
      nouveau: [false],
      dateDepart: [new Date(this.year, this.month, this.day),Validators.required],
      dateArrive: [new Date(this.year, this.month, this.day),Validators.required],
      destination: this.fb.array([
      ]),
      ServicesNonInclus: this.fb.array([
      ]),
      description: ['',Validators.required]
    });
  }

}
