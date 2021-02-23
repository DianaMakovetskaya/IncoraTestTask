import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  getAllPosts(): Observable<any[]>{
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getUserPosts(id): Observable<any[]>{
    return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
