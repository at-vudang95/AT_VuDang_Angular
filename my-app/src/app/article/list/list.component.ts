import { Component } from '@angular/core';
import {ArticleService} from '../../service/articleService';

@Component({
  selector: 'app-list-article',
  templateUrl: './list.component.html'
})
export class ListArticleComponent {
  title = 'app';
  articles: Array<any> = [];
  constructor(private service: ArticleService) {
    this.service.getList().subscribe((data: any) => {
      console.log(data);
      this.articles = data.articles;
    }, (err: any) => {
      console.log('errors');
    });
  }
}
