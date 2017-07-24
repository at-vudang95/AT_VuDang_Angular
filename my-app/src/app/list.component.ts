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
  deleteMember(i:number){
      //this.data = this.data.splice(i+1,1);
      this._sharedService.deleteData(i);
  }
}