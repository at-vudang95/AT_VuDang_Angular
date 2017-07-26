import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @Input() data: any;
  name = 'vudang';
  @Output() result2: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    // console.log('constructor');
  }
  ngOnInit(): any {
  }
  deleteMember(i: number)  {
      this.result2.emit(i);
  }
}
