import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ArticleService {

  article: any = null;
  articles: Array<any> = [];
  constructor(private http: Http) {
  }
  getList() {
    return this.http.get('assets/data.json').map(res => res.json());
  }
  getDetail(index: number) {
    return this.http.get('assets/data.json')
      .map(article => article.json().articles.find(trai => trai.id === index));
  }

}
