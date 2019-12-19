import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

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
      const errorTranslation = this.changePlaceHoldersToValues(errorName);
      errors.push({
        name: errorName,
        value: errorTranslation,
      });
    }
    return errors;
  }

  getPlaceholders(str: string): string[] {
    const res: string[] = [];
    while (str.includes('{{')) {
      res.push(str.substring(str.indexOf('{{') + 2 , str.indexOf('}}')));
      str = str.slice(str.indexOf('}}') + 2);
    }
    return res;
  }
  changePlaceHoldersToValues(errorName: string): string {
    let errorTranslation: string = this.translations[errorName];
    const placeholders = this.getPlaceholders(this.translations[errorName]);
    for (const placeholder of placeholders) {
          errorTranslation = errorTranslation.replace(
            '{{' + placeholder + '}}', this.control.errors[errorName][placeholder]
          );
        }
    return errorTranslation;
  }

}
