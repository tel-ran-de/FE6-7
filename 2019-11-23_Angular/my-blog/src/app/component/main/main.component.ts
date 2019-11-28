import { Component, OnInit } from '@angular/core';
import {PostDto} from '../../dto/PostDto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  posts: PostDto[] = [
    {
      id: 1,
      title: 'Title 1',
      body: 'Body 1',
      date: '2019-11-25'
    },
    {
      id: 2,
      title: 'Title 2',
      body: 'Body 2',
      date: '2019-11-25'
    },
    {
      id: 3,
      title: 'Title 3',
      body: 'Body 3',
      date: '2019-11-24'
    },
    {
      id: 4,
      title: 'Title 4',
      body: 'Body 4',
      date: '2019-11-24'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
