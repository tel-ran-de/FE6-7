import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  switchToRussian($event: MouseEvent) {
    this.translateService.setDefaultLang('ru');
  }
  switchToEnglish($event: MouseEvent) {
    this.translateService.setDefaultLang('en');
  }
}
