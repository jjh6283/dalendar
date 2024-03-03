import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsPageComponent } from './goals-page/goals-page.component';
import { FitnessPageModule } from '../fitness-page/fitness-page.module';
import { NutrPageModule } from '../nutr-page/nutr-page.module';
import { ProdPageModule } from '../prod-page/prod-page.module';
import { GeneralPageModule } from '../general-page/general-page.module';



@NgModule({
  declarations: [
    GoalsPageComponent
  ],
  imports: [
    CommonModule,
    FitnessPageModule,
    NutrPageModule,
    ProdPageModule,
    GeneralPageModule
  ],
  exports: [
    GoalsPageComponent
  ]
})
export class GoalsPageModule { }
