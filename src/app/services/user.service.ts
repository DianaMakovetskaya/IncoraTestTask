import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(value => this.users = value);
  }

  getAllUsers(): any[] {
    return this.users;
  }

  login(name): any {
    let flag = null;
    this.users.map(value => {
      if (value.username === name){
        flag = value;
      }
    });
    return flag;
  }
}
