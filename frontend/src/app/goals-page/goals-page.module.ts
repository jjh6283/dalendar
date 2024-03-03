import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsPageComponent } from './goals-page/goals-page.component';



@NgModule({
  declarations: [
    GoalsPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GoalsPageComponent
  ]
})
export class GoalsPageModule { }
