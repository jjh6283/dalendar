import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { WeekViewModule } from '../week-view/week-view.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WeekViewModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
