import { Component } from '@angular/core';
import { Member } from './member';
import { MyService } from './service';
@Component({
  selector: 'my-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  name:string;
  constructor(private _sharedService: MyService){
     this.name = 'hello';
  }
  newMember(){
    //let member:Member = new Member(this.name);
  //  console.log(this.name);
  //  console.log(member.$domElm);
    this._sharedService.insertData(this.name);
    this.name = '';
  } 
}