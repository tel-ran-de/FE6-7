import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss']
})
export class ValidationErrorComponent implements OnInit {

  translations = [
    {
    errorName: 'required',
      errorText: 'This field is required'
  },
    {
      errorName: 'minlength',
      errorText: 'This field has min length'
    }
  ];
  @Input()
  control: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

}
