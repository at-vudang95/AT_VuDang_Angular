import {Component, Input, DoCheck} from '@angular/core';
import {MyService} from "../MyService";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  @Input() trainer: any;
  constructor(private trainerService: MyService) {

  }
  // ngDoCheck() {
  //      	this.trainer = this.trainerService.trainer[this.id];
  // }


}
