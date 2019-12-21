import {Component, Input, OnInit} from '@angular/core';
import { AbstractControl } from '@angular/forms';

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
    for (const errorName of Object.keys(this.control.errors)) {
      let errorTranslation = this.translations[errorName];
      const placeholders = this.getPlaceholders(errorTranslation);
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

  getPlaceholders(str) {
    const regex: RegExp = /{{.*?}}/ig;
    const matches = [];
    const matchesWithCurlyBraces = str.match(regex);
    for (const match of matchesWithCurlyBraces) {
      matches.push(match.slice(2, -2));
    }
    console.log(matches);
    return matches;
  }
}
