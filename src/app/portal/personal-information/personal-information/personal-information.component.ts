import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  countdownDate: Date = new Date('2023-12-31T23:59:59'); // Set your countdown date here
  timeLeft: any = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.updateTime();
    this.interval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  updateTime(): void {
    const now = new Date().getTime();
    const difference = this.countdownDate.getTime() - now;

    if (difference > 0) {
      this.timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    } else {
      this.timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
      clearInterval(this.interval);
    }
  }
}
