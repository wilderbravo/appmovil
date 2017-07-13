import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UniversityServiceProvider {
  data: any = null;
  constructor(public http: Http) {
    console.log('Hello UniversityServiceProvider Provider');
  }
  load()
  {
    if (this.data)
    {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
    this.http.get('https://randomuser.me/api/?results=10')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.results;
        resolve(this.data);
      });
    });
}
}
