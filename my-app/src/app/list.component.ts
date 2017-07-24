import { Component,OnInit} from '@angular/core';
// import { Member } from './member';
import { MyService } from './service';
@Component({
  selector: 'my-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  data: string[] = [];
  constructor(private _sharedService: MyService){
            
  }
  ngOnInit():any {
    this.data = this._sharedService.dataArray;
  }
}