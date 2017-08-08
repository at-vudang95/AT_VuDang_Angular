import {Injectable} from '@angular/core';

@Injectable()
export class MyService {

  member: any = {
    personal: {
      name: 'Vu Dang',
      birthday: '1995-04-29'
    },
    company: {
      team: 'PHP',
      joined: '2017-02-02'
    },
    skill: 'PHP'
  }
  data: Array<any> = [this.member];
}
