import {Component, Output, ViewChild} from '@angular/core';
import {MyService} from './service/MyService';
import {FormComponent} from "./Form/form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService]
})
export class AppComponent {
  title = 'app';
  id: any;
  @ViewChild(FormComponent) form: FormComponent;
  @Output() edited: boolean;
  constructor(private service: MyService) {
    this.id = 0;
  }
  detail(index: number) {
    this.id = index;
    this.form.edited = true;
  }
}
