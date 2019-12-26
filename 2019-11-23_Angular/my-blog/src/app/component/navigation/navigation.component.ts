import { Component, OnInit } from '@angular/core';
import {NavigationItemDto} from '../../dto/NavigationItemDto';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  navigationData: NavigationItemDto[] = [
    {
      text: 'home',
      link: ''
    },
    {
      text: 'about',
      link: 'about'
    },
    {
      text: 'sample_post',
      link: ''
    },
    {
      text: 'contact',
      link: ''
    },
    {
      text: 'create_post',
      link: 'new-post'
    },
    {
      text: 'create_author',
      link: 'new-author'
    }
  ];

  ngOnInit() {
  }

}
