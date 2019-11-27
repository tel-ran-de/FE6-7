import { Component, OnInit } from '@angular/core';
import {NavBarDto} from "../dto/NavBarDto";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  navBars: NavBarDto[] = [
    {name: 'Home' , link: 'https://www.google.ru/'},
    {name: 'about' , link: 'https://www.google.ru/'},
    {name: 'Sample Post' , link: 'https://www.google.ru/'},
    {name: 'Contact' , link: 'https://www.google.ru/'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
