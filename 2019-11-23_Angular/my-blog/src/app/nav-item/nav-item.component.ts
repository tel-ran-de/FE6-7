import {Component, Input, OnInit} from '@angular/core';
import {NavDto} from '../../dto/NavDto';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input()
  links: NavDto;

  constructor() { }

  ngOnInit() {
  }

}
