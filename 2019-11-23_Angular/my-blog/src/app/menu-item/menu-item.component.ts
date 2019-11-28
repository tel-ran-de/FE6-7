import {Component, Input, OnInit} from '@angular/core';
import {MenuDto} from '../dto/MenuDto';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input()
  menuItem: MenuDto;

  constructor() { }

  ngOnInit() {
  }
}
