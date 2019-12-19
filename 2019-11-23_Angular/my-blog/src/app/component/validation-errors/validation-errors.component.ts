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
      let errorTranslation = this.translations[errorName];
      const placeholder = this.getPlaceholder(this.translations[errorName]);
      errorTranslation = errorTranslation.replace(
        '{{' + placeholder + '}}', this.control.errors[errorName][placeholder]
        );
      errors.push({
        name: errorName,
        value: errorTranslation,
      });
    }
    return errors;
  }

  getPlaceholder(str: string) {
    return str.substring(
      str.lastIndexOf('{{') + 2,
      str.lastIndexOf('}}')
    );
  }
}
