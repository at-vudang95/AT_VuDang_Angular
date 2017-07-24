import {Injectable} from '@angular/core';

@Injectable()
export class MyService {
    dataArray: any[] = [];

    insertData(data: any){
        this.dataArray.push(data);
    }
}