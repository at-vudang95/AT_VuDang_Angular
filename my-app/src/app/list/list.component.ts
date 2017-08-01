import {Component, EventEmitter, Output} from '@angular/core';
import {MyService} from "../MyService";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  trainers: any[];
  @Output() detailTrainer: EventEmitter<any> = new EventEmitter();
  constructor(private trainerService: MyService) {
    this.trainers = trainerService.getList();
  }
  detail(index: number) {
    this.detailTrainer.emit(index);
  }

}
