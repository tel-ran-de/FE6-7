import {Component, Input, OnInit} from '@angular/core';
import {NavBarDto} from '../dto/NavBarDto';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input()
  navBar: NavBarDto;

  constructor() { }

  ngOnInit() {
  }

}
