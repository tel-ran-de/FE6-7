import { Component, OnInit } from '@angular/core';
import {PostDto} from '../../dto/PostDto';
import {PostService} from '../../service/post/post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  posts: PostDto[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(
      posts => {
        this.posts = posts;
      }
    );
  }

}
