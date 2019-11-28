import {Component, Input, OnInit} from '@angular/core';
import {PostDto} from '../../dto/PostDto';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {

  @Input()
  post: PostDto;

  constructor() { }

  ngOnInit() {
  }

}
