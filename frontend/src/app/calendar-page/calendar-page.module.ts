import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';



@NgModule({
  declarations: [
    CalendarPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalendarPageComponent
  ]
})
export class CalendarPageModule { }
