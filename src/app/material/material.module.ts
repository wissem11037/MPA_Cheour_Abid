import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatStepperModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule
]

@NgModule({
  imports: [
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
