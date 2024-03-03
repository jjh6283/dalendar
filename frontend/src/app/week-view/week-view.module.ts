import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekViewComponent } from './week-view/week-view.component';



@NgModule({
  declarations: [
    WeekViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeekViewComponent
  ]
})
export class WeekViewModule { }
