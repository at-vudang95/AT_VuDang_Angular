import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {RouterLinkActive, RouterModule, Routes} from '@angular/router';
import {ListArticleComponent} from './article/list/list.component';
import {DetailArticleComponent} from './article/detail/detail.component';
import {HttpModule} from '@angular/http';
import {FormArticleComponent} from './article/form/form.component';
import {NavComponent} from './template/nav.component';
export const routes: Routes = [
  { path: 'article',
    children: [
      { path: '', component: ListArticleComponent, pathMatch: 'full' },
      { path: ':id', component: DetailArticleComponent},
      { path: 'edit/:id', component: FormArticleComponent}
    ]
  },
  { path: '', component: FormArticleComponent },
  { path: 'about', component: FormArticleComponent },
  { path: '**',
    component: FormArticleComponent
  },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent, ListArticleComponent, DetailArticleComponent, FormArticleComponent, NavComponent
  ],
  imports: [
    BrowserModule, routing, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
