import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  trainers: any[];
  trainer: any;
  constructor() {
    this.trainer = null;
    this.trainers = [{
      'avarta': '../assets/avata.jpg',
      'name': 'Nam 1',
      'team': 'Ruby',
    }, {
      'avarta': '../assets/avata.jpg',
      'name': 'Nam 2',
      'birthday': '20/10/1995',
      'team': 'PHP',
    }];
  }
  detail(index: number) {
    this.trainer = null;
    setTimeout(() => {
      this.trainer = this.trainers[index];
    });
  }
}
