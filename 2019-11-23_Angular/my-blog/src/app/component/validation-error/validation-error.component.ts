import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {TranslationsDto} from '../../dto/TranslationsDto';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss']
})
export class ValidationErrorComponent implements OnInit {

  translations: TranslationsDto = {
    minlength: 'This field must be 3 symbols or more',
    required: 'This field is required'
  };
  @Input()
  control: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

}
