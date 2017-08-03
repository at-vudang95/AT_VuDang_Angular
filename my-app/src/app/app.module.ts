import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BirthdayDirective } from './birthday.directive';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {ImagePipe} from './image.pipe';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent, BirthdayDirective, ListComponent, DetailComponent, ImagePipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
