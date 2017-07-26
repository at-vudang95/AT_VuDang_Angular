import {Injectable} from '@angular/core';

@Injectable()
export class MyService {
  dataArray: string[] = [];

  insertData(data: string){
    this.dataArray.push(data);
  }
  deleteData(index: number){
      this.dataArray.splice(index,1);
  }
}