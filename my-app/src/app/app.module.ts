import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { InputComponent } from './input.component';
import {ParentListComponent} from './parent-list.component';
@NgModule({
  declarations: [
    AppComponent, InputComponent, ListComponent, ParentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
