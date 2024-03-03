import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { CalendarPageModule } from './calendar-page/calendar-page.module';
import { GoalsPageModule } from './goals-page/goals-page.module';
import { NavbarModule } from './navbar/navbar.module';
import { NutrPageModule } from './nutr-page/nutr-page.module';
import { WelcomePageModule } from './welcome-page/welcome-page.module';
import { FitnessPageModule } from './fitness-page/fitness-page.module';
import { GeneralPageModule } from './general-page/general-page.module';
import { ProdPageModule } from './prod-page/prod-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    CalendarPageModule,
    GoalsPageModule,
    NavbarModule,
    NutrPageModule,
    WelcomePageModule,
    FitnessPageModule,
    GeneralPageModule,
    ProdPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
