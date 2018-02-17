import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  dateString: string = ""

  constructor() { }

  ngOnInit() {
    this.updateDateTime()
  }

  updateDateTime(){
    var today = new Date();
    var weekdays = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')

    
    this.dateString = weekdays[today.getDay()] + " " + today.getDate() + this.getDaySuffix(today.getDay()) +  ", " + this.getTimeString(today);;

  }

  private getDaySuffix(day: number) : string {
    if (day >= 11 && day <= 13) return "th"


    switch (day % 10){
      case 1: return "st"
      case 2: return "nd"
      case 3: return "rd"
      default: return "th"
    }
  }

  private getTimeString(today: Date) : string{
    var isPm = false;
    var timeString = "";

    if (today.getHours() > 12){
      isPm = true;
      timeString = (today.getHours() - 12).toString()
    }
    else{
      timeString = today.getHours().toString()
    }

    timeString += ":" + today.getMinutes(); 

    if (isPm){
      timeString += "pm";
    }
    else{
      timeString += "am";
    }

    return timeString;
  }
}
