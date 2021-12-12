import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Voyage } from 'src/app/Models/voyage';
import { VoyageService } from 'src/app/Services/voyage.service';

@Component({
  selector: 'app-modify-voyage',
  templateUrl: './modify-voyage.component.html',
  styleUrls: ['./modify-voyage.component.css']
})
export class ModifyVoyageComponent implements OnInit {

  voyage: Voyage[] = [];


  VoyageForm: FormGroup = new FormGroup({});


  today = new Date();
  day = this.today.getDay();
  month = this.today.getMonth();
  year = this.today.getFullYear();

  identifiant: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private voyageService: VoyageService, private fb: FormBuilder) { }

  get destination() {
    return this.VoyageForm.get('destination') as FormArray;
  }
  get dateDepart() {
    return this.VoyageForm.get('dateDepart');
  }
  get dateArrive() {
    return this.VoyageForm.get('dateArrive');
  }
  get ServicesNonInclus() {
    return this.VoyageForm.get('ServicesNonInclus') as FormArray;
  }

  addServicesNonInclus() {
    this.ServicesNonInclus.push(this.fb.control(''));
  }

  getDate() {
    let Time = this.dateArrive?.value.getTime() - this.dateDepart?.value.getTime();
    let Days = Time / (1000 * 3600 * 24);
    return Days;
  }

  setUpDestination() {
    for (let i = 0; i < this.getDate(); i++) {
      this.addDestination(i + 1);
    }
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

  onReset() {
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

  onSubmitForm() {
    //this.voyageService.updateVoyage(this.identifiant,this.VoyageForm.value).subscribe();
  }


  ngOnInit(): void {

    this.identifiant = this.activatedRoute.snapshot.params['idv'];
    this.voyageService.getVoyages().pipe(map(voyage => voyage.filter(voyage => voyage.id == this.identifiant)))
      .subscribe(data => this.voyage = data);
    this.VoyageForm = this.fb.group({
      libelle: ['', Validators.required],
      photo: ['', Validators.required],
      prix: [, Validators.required],
      nouveau: [false],
      dateDepart: [, Validators.required],
      dateArrive: [, Validators.required],
      destination: this.fb.array([
      ]),
      ServicesNonInclus: this.fb.array([
      ]),
      description: ['', Validators.required]
    });

  }

}
