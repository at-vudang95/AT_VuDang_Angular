import {Injectable} from '@angular/core';

@Injectable()
export class MyService {
  trainer: any = null;
  trainers = [{
    'avarta': '../../assets/avata.jpg',
    'name': 'Nam 1',
    'team': 'Ruby',
  }, {
    'avarta': '../../assets/avata.jpg',
    'name': 'Nam 2',
    'birthday': '20/10/1995',
    'team': 'PHP',
  }, {
      'avarta': '',
      'name': 'Sinh vien 3',
      'birthday': '22/10/1994',
      'team': 'Ruby',
    }, {
    'avarta': '',
    'name': 'Sinh vien 4',
    'birthday': '10/12/1995',
    'team': 'PHP',
  }];
  getList(){
    return this.trainers;
  }
  changeTrainer(index: number) {
    this.trainer = this.trainers[index];
  }

}
