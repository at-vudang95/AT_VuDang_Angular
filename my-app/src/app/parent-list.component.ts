import {AfterContentInit, Component, ContentChild, OnInit} from '@angular/core';
import {ListComponent} from './list.component';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html'
})
export class ParentListComponent implements OnInit, AfterContentInit {
  @ContentChild(ListComponent) ct_list: ListComponent;
  data: any;
  constructor() {
  }
  ngAfterContentInit() {
  }
  ngOnInit() {
  }
  updateList(list: any) {
    this.ct_list.data = list;
  }

}
