import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutrPageComponent } from './nutr-page/nutr-page.component';



@NgModule({
  declarations: [
    NutrPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NutrPageComponent
  ]
})
export class NutrPageModule { }
