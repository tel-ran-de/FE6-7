import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

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

  errors(): any[] {
    const errors = [];
    for (const errorName of Object.keys(this.control.errors)) {
      let errorTranslation = this.control.errors[errorName];
      const placeholder = this.getPlaceHolder(this.translations[errorName]);
      errorTranslation = errorTranslation.replace(
        '{{' + placeholder + '}}',
        this.control.errors[errorName][placeholder]
      );
      errors.push({
          name: errorName,
          value: errorTranslation
        });
    }
    return errors;
  }

  getPlaceHolder(str: string) {
    return str.substring(
      str.lastIndexOf('{{') + 2,
      str.lastIndexOf('}}')
    );
  }
}
