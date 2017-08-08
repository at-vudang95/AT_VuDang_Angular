import {Component, EventEmitter, Output} from '@angular/core';
import {MyService} from '../service/MyService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  members: Array<any> = [];
  @Output() detailMember: EventEmitter<any> = new EventEmitter();
  constructor(private service: MyService) {
    this.members = service.data;
  }
  edit(index: number) {
    this.detailMember.emit(index);
  }
  delete(index: number) {
    this.members.splice(index, 1);
    this.service.data = this.members;
  }

}
