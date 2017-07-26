import {Component, EventEmitter, Output, OnInit, ViewChild} from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  name: string;
  @Output() result: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    this.name = 'hello';
  }

  ngOnInit() {

  }
  newMember() {
     this.result.emit(this.name);
  }
}
