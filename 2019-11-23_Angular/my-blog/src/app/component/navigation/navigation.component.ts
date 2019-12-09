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
      text: 'Home',
      link: 'home'
    },
    {
      text: 'About',
      link: 'about'
    },
    {
      text: 'Sample post',
      link: 'post'
    },
    {
      text: 'Contact',
      link: 'contact'
    }
  ];

  ngOnInit() {
  }

}
