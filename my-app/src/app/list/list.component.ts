import {Component, EventEmitter, Output} from '@angular/core';
import {MyService} from '../MyService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  trainers: Array<any> = [];
  @Output() detailTrainer: EventEmitter<any> = new EventEmitter();
  constructor(private trainerService: MyService) {
    trainerService.getList().subscribe(
      // (res: Response) => this.trainers = res.json().data
      (data: any) => {
        this.trainers = data.data;
        console.log(this.trainers);
      }, (err: any) => {
      }
    );
  }
  detail(index: number) {
    this.detailTrainer.emit(index);
  }

}
