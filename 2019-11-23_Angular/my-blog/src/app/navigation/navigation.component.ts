import { Component, OnInit } from '@angular/core';
import {MenuDto} from '../dto/MenuDto';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menuItems: MenuDto[] = [
    {name: 'Home', link: 'https://www.google.ru/'},
    {name: 'About', link: 'https://www.google.ru/'},
    {name: 'Sample Post', link: 'https://www.google.ru/'},
    {name: 'Contact', link: 'https://www.google.ru/'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
