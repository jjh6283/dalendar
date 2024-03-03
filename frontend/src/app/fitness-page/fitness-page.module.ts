import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnessPageComponent } from './fitness-page/fitness-page.component';



@NgModule({
  declarations: [
    FitnessPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FitnessPageComponent
  ]
})
export class FitnessPageModule { }
