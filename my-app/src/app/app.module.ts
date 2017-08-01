import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BirthdayDirective } from './birthday.directive';
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";
import {ImagePipe} from "./image.pipe";
@NgModule({
  declarations: [
    AppComponent, BirthdayDirective, ListComponent, DetailComponent,ImagePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
