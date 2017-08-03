import {Component} from '@angular/core';
import {MyService} from './MyService';
import {Http} from '@angular/http';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService]
})
export class AppComponent {
  trainer: any;

  constructor(private trainerService: MyService) {
  }

  detail(index: number) {
    this.trainer = null;
    setTimeout(() => {
      this.trainerService.getList().subscribe(
        (data: any) => {
          for (const trainer of data.data){
            if (trainer.id === index) {
              this.trainer = trainer;
              break;
            }
          }
        }, (err: any) => {
        });
    });
  }
}
