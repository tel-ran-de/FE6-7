import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import * as XRegExp from 'xregexp';

interface ErrorItem {
  name: string;
  value: string;
}

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss']
})
export class ValidationErrorsComponent implements OnInit {

  @Input()
  control: AbstractControl;
  @Input()
  translations: any;

  constructor() { }

  ngOnInit() {
  }
  errors(): ErrorItem[] {
    const errors: ErrorItem[] = [];
    const regex = /{{.*?}}/ig;
    for (const errorName of Object.keys(this.control.errors)) {
      let errorTranslation = this.translations[errorName];
      const placeholders = this.getPlaceholders(errorTranslation, regex);
      for (const placeholder of placeholders) {
        errorTranslation = errorTranslation.replace(
          '{{' + placeholder + '}}', this.control.errors[errorName][placeholder]
        );
      }
      errors.push({
        name: errorName,
        value: errorTranslation,
      });
    }
    return errors;
  }
  getPlaceholders(str, regex) {
    const matches = [];
    XRegExp.forEach(str, regex, (match) => matches.push(match[0].slice(2, -2)));
    return matches;
  }
}
