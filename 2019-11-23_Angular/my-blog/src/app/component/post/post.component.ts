import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../service/post/post.service';
import {PostDto} from '../../dto/PostDto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: PostDto;

  constructor(private route: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit() {
    const postId = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(postId).subscribe(
      postDto => this.post = postDto
    );
  }

}
