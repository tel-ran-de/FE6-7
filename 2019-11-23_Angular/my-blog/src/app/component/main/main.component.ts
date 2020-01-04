import { Component, OnInit } from '@angular/core';
import {PostDto} from '../../dto/PostDto';
import {PostService} from '../../service/post/post.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  posts: PostDto[];
  constructor(private postService: PostService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(
      posts => {
        this.posts = posts;
      }
    );
  }

}
