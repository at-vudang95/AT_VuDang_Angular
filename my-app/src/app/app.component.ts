import { Component } from '@angular/core';
import { MyService } from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [MyService],
})
export class AppComponent {
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
