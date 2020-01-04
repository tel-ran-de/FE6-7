import { Component, OnInit } from '@angular/core';
import {NavigationItemDto} from '../../dto/NavigationItemDto';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  navigationData: NavigationItemDto[] = [
    {
      text: 'navigation_data.home',
      link: ''
    },
    {
      text: 'navigation_data.about',
      link: 'about'
    },
    {
      text: 'navigation_data.sample_post',
      link: ''
    },
    {
      text: 'navigation_data.contact',
      link: ''
    },
    {
      text: 'navigation_data.create_post',
      link: 'new-post'
    },
    {
      text: 'navigation_data.create_author',
      link: 'new-author'
    }
  ];

  ngOnInit() {
  }

}
