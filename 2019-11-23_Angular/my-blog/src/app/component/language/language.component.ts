import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    translateService.addLangs(['en', 'ru']);
    translateService.setDefaultLang('ru');
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/en|ru/) ? browserLang : 'ru');
  }

  ngOnInit() {
  }

}
