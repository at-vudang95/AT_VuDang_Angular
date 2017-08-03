import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MyService {

  trainer: any = null;
  trainers: Array<any> = [];
  constructor(private http: Http) {
  }
  getList() {
    return this.http.get('assets/data.json').map(res => res.json());
  }
  getDetail(index: number) {
    return this.trainer = this.trainers[index];
  }

}
