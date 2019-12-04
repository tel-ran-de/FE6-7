import {Component, Input, OnInit} from '@angular/core';
import {NavigationItemDto} from '../../dto/NavigationItemDto';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {

  constructor() { }

  @Input()
  navigationData: NavigationItemDto;

  ngOnInit() {
  }

}
