import {AfterContentInit, Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import { MyService } from './service';
import {ListComponent} from './list.component';
import {ParentListComponent} from './parent-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService],
})
export class AppComponent implements OnInit, AfterContentInit {

  @ViewChild(ListComponent) list: ListComponent;
  @ViewChild(ParentListComponent) parentList: ParentListComponent;
  member: Array<string>;
  constructor() {
    this.member = [];
  }
  ngAfterContentInit() {
    this.member.push('Vu dang 2');
    this.list.data = this.member;
    this.parentList.updateList(this.member);
  }
  ngOnInit() {
     this.member.push('Vu dang 1');
     this.list.data = this.member;
     this.parentList.updateList(this.member);
  }

  pushNewMember(e: any) {
    this.member.push(e);
    this.list.data = this.member;
    this.parentList.updateList(this.member);
  }
  deleteNewMember(e: number) {
    this.member.splice(e, 1);
    this.list.data = this.member;
    this.parentList.updateList(this.member);
  }

}
