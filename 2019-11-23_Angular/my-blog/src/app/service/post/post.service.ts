import { Injectable } from '@angular/core';
import { PostDto } from '../../dto/PostDto';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private URL_POST = '/post';

  posts: PostDto[];

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<PostDto[]> {
    return this.http.get<PostDto[]>(this.URL_POST);
  }
  getPostById(id: number): PostDto {
    this.getAllPosts().subscribe(response => this.posts = response);
    for (const p of this.posts) {
      if (p.id === id) {
        return p;
      }
    }
    return null;
  }
}
