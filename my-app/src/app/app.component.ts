import { Component } from '@angular/core';
import {MyService} from "./MyService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService]
})
export class AppComponent {
  trainer : any;
  constructor(private trainerService: MyService) {
  }
  detail(index: number) {
    this.trainer = null;
    setTimeout(() => {
      this.trainer = this.trainerService.trainers[index];this.trainer = this.trainerService.trainers[index];
    });
  }
}
