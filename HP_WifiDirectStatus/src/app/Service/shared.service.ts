import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  istoggleCheck = true;

  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data);
  }

  getData() {
    return this.http.get<any>('http://localhost:3000/posts')
  }

  table = [
    {
      row: 1,
      checkValue: false,
      wifidirectName: 'HP_LaserJet_Printer0',
      macAddress: 'ba:db:ad:ba:db:ad',
    },
    {
      row: 2,
      checkValue: false,
      wifidirectName: 'HP_LaserJet_Printer1',
      macAddress: 'ba:db:ad:ba:db:ae',
    },
    {
      row: 3,
      checkValue: false,
      wifidirectName: 'HP_LaserJet_Printer2',
      macAddress: 'ba:db:ad:ba:db:ab',
    },
    {
      row: 4,
      checkValue: false,
      wifidirectName: 'HP_LaserJet_Printer3',
      macAddress: 'ba:db:ad:ba:db:ac',
    },
  ]

}
