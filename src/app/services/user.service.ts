import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(value => this.users = value);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  login(name): User {
    let flag = null;
    this.users.map(value => {
      if (value.username === name){
        flag = value;
      }
    });
    return flag;
  }
}
