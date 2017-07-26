import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import { Member } from './member';
import { MyService } from './service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  // data: string[] = [];
  @Input() data: any;
  @Output() result2: EventEmitter<any> = new EventEmitter<any>();
  constructor(private _sharedService: MyService) {
    console.log('constructor');
  }
  OnInit(): any {
    console.log('ngOnInit');
    // this.data = this._sharedService.dataArray;
    this.data = [];
  }
  deleteMember(i: number)  {
      // this.data = this.data.splice(i+1,1);
      // this._sharedService.deleteData(i);
      this.result2.emit(i);
  }
}
