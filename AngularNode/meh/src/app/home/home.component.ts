import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickTimes: number = 0;

  constructor() { }

  ngOnInit() {
  }

  countClick(){
    this.clickTimes += 1;
  }

  setClasses(){
    let myClasses = {
      active: this.clickTimes > 4,
      notActive: this.clickTimes <= 4,
    }
    return myClasses;
  }
}
