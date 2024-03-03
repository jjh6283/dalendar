import { Component } from '@angular/core';
import { CalendarMonth, Month } from '../../types/Calendar';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [],
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.css'
})
export class CalendarPageComponent {
  year = 2024;
  month = 2;
  isLeapYear = (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
  
  date = new Date(this.year, this.month)

  months = [
    {
      name: Month.JAN,
      days: 31
    } as CalendarMonth,
    {
      name: Month.FEB,
      days: this.isLeapYear ? 29 : 28
    } as CalendarMonth,
    {
      name: Month.MAR,
      days: 31
    } as CalendarMonth,
    {
      name: Month.APR,
      days: 30
    } as CalendarMonth,
    {
      name: Month.MAY,
      days: 31
    } as CalendarMonth,
    {
      name: Month.JUN,
      days: 30
    } as CalendarMonth,
    {
      name: Month.JUL,
      days: 31
    } as CalendarMonth,
    {
      name: Month.AUG,
      days: 31
    } as CalendarMonth,
    {
      name: Month.SEP,
      days: 30
    } as CalendarMonth,
    {
      name: Month.OCT,
      days: 31
    } as CalendarMonth,
    {
      name: Month.NOV,
      days: 30
    } as CalendarMonth,
    {
      name: Month.DEC,
      days: 31
    } as CalendarMonth,

  ]
}
