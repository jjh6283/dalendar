import { Component, EventEmitter, Output } from '@angular/core';
import { MONTHS } from './TimeDefinitions';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent {

  // Year month information
  months = MONTHS;

  // Information for today
  today = new Date();
  curYear: number = this.today.getFullYear();
  curMonth: number = this.today.getMonth();
  curDay: number = this.today.getDay();

  // Information for selected day
  firstWeekDayOfMonth: number = 0;
  selYear: number;
  selMonth: number;
  selDay: number;
  isLeapYear: boolean;
  selDaysInMonth: number;

  start: number = -2;
  end: number = 1;

  start1: number = 24;
  end1: number = 29;

  // By default, viewing today
  constructor() {
    this.selDay = this.curDay;
    this.selMonth = this.curMonth;
    this.selYear = this.curYear;
    this.isLeapYear = (this.selYear % 4 === 0 && this.selYear % 100 !== 0) || (this.selYear % 400 === 0);
    this.selDaysInMonth = this.months[this.selDay].days + 1;

  }

  getFirstDayOfMonth() {
    let weekday = new Date(this.curYear, this.curMonth, 1);
    this.firstWeekDayOfMonth = weekday.getDay();
  }

  getWeeksInMonth() {
    // Calculate the total number of days in the month including any partial weeks
    const totalDaysWithPadding =  this.selDaysInMonth + this.firstWeekDayOfMonth;
  
    // Calculate the total number of weeks
    const totalWeeks = Math.ceil(totalDaysWithPadding / 7);
  
    return totalWeeks;
  }

  determineDate(dayOfWeek: number, weekNumber: number): number {
    const daysInWeek = 7;
  
    const dayOfMonth = (weekNumber - 1) * daysInWeek + dayOfWeek + 1;
  
    return dayOfMonth;
  }

  setNextMonth() {
    this.selMonth += 1

    if (this.selMonth + 1 > 11) {
      this.selYear += 1;
      this.selMonth = 0;
    }
  }

  setPreviousMonth() {
    this.selMonth -= 1

    if (this.selMonth - 1 < 0) {
      this.selYear -= 1;
      this.selMonth = 11;
    }
  }

  checkPeriod(day: number) {
    
    // if the start is 
    return !(this.start1 < day && this.end1 > day) && !(this.start < day && this.end > day) 
  } 
}

