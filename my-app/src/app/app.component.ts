import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import { MyService } from './service';
import {ListComponent} from './list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService],
})
export class AppComponent implements OnInit {

  @ViewChild(ListComponent) list: ListComponent;
  member: Array<string>;
  constructor() {
    this.member = [];
  }

  ngOnInit() {
    // this.member.push('Vu dang');
  }

  pushNewMember(e: any) {
    this.member.push(e);
    this.list.data = this.member;
  }
  deleteNewMember(e: number) {
    this.member.splice(e, 1);
    this.list.data = this.member;
  }
  // title = 'Hello world !';
  // hello:string ='';
  // name:string;
  // constructor(){
  //   this.name = '';
  // }
  // showName(){
  //   this.hello = 'My name is '+this.name;
  // }
}
