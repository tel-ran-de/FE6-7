import { Component, OnInit } from '@angular/core';
import {MenuDto} from '../dto/MenuDto';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menus: MenuDto[] = [
    {
      menuName: 'Home',
      menuUrl: 'https://www.google.ru/'
      /*menuUrl: 'index.html'*/
    },
    {
      menuName: 'About',
      menuUrl: 'https://www.google.ru/'
      /*menuUrl: 'about.html'*/
    },
    {
      menuName: 'Sample Post',
      menuUrl: 'https://www.google.ru/'
      /*menuUrl: 'post.html'*/
    },
    {
      menuName: 'Contact',
      menuUrl: 'https://www.google.ru/'
      /*menuUrl: 'contact.html'*/
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
