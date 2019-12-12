import { Injectable } from '@angular/core';
import { PostDto } from '../../dto/PostDto';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private URL_POST = '/post';

  posts: PostDto[] = [
    {
      id: 1,
      title: 'My First Post in this blog',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat iaculis tellus, vitae vehicula arcu aliquet non. Sed a efficitur augue, quis elementum erat. Suspendisse sodales, sapien id placerat imperdiet, augue lectus efficitur nulla, vitae hendrerit eros metus a ligula. Nullam nisl lorem, tincidunt a enim non, dapibus semper nunc. Donec consequat nibh est, sodales fermentum ex consequat a. Suspendisse potenti. Aenean vel pulvinar nunc, eget dapibus augue. Ut vitae pretium arcu. Aenean sed justo justo. Mauris mollis vel justo non scelerisque. Etiam vel ex non nisi cursus auctor id at magna.',
      date: '2019-12-10'
    },
    {
      id: 2,
      title: 'My Second Post in this blog',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat iaculis tellus, vitae vehicula arcu aliquet non. Sed a efficitur augue, quis elementum erat. Suspendisse sodales, sapien id placerat imperdiet, augue lectus efficitur nulla, vitae hendrerit eros metus a ligula. Nullam nisl lorem, tincidunt a enim non, dapibus semper nunc. Donec consequat nibh est, sodales fermentum ex consequat a. Suspendisse potenti. Aenean vel pulvinar nunc, eget dapibus augue. Ut vitae pretium arcu. Aenean sed justo justo. Mauris mollis vel justo non scelerisque. Etiam vel ex non nisi cursus auctor id at magna.',
      date: '2019-12-10'
    },
    {
      id: 3,
      title: 'My Third Post in this blog',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat iaculis tellus, vitae vehicula arcu aliquet non. Sed a efficitur augue, quis elementum erat. Suspendisse sodales, sapien id placerat imperdiet, augue lectus efficitur nulla, vitae hendrerit eros metus a ligula. Nullam nisl lorem, tincidunt a enim non, dapibus semper nunc. Donec consequat nibh est, sodales fermentum ex consequat a. Suspendisse potenti. Aenean vel pulvinar nunc, eget dapibus augue. Ut vitae pretium arcu. Aenean sed justo justo. Mauris mollis vel justo non scelerisque. Etiam vel ex non nisi cursus auctor id at magna.',
      date: '2019-12-10'
    }
  ];

  constructor(private http: HttpClient) { }

  getPost(id: number): PostDto {
    for (const post of this.posts) {
      if (post.id === id) {
        return post;
      }
    }
    return null;
  }

  getAllPosts(): Observable<PostDto[]> {
    return this.http.get<PostDto[]>(this.URL_POST);
  }
}
