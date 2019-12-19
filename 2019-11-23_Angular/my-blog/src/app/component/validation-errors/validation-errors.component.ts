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
        errors.push({
          name: errorName,
          value: this.control.errors[errorName]
        });
    }
    return errors;
  }
}
