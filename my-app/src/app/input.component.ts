import {Component, EventEmitter, Output, OnInit, ViewChild} from '@angular/core';
import { Member } from './member';
import { MyService } from './service';
import {AppComponent} from './app.component';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  name: string;
  @Output() result: EventEmitter<any> = new EventEmitter<any>();
  constructor(private _sharedService: MyService) {
    this.name = 'hello';
  }

  ngOnInit() {

  }
  newMember() {
    // this.app2.member = this.name;

    // let member:Member = new Member(this.name);
    //  console.log(this.name);
    //  console.log(member.$domElm);
    // this._sharedService.insertData(this.name);
    // this.name = '';
     this.result.emit(this.name);
  }
}
