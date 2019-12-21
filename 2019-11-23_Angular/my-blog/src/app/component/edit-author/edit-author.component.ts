import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorService} from '../../service/author/author.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit {

  authorForm: FormGroup;
  errorTranslations: any;

  constructor(private fb: FormBuilder,
              private authorService: AuthorService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.authorForm = this.fb.group({
        id: [],
        firstName: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]],
        lastName: ['']
      }
    );
    this.translateService.get('errors').subscribe((res: any) => {
      this.errorTranslations = res;
    });

    console.log(this.authorForm);
  }

  onSubmit($event) {
    console.log(this.authorForm.getRawValue());
    this.authorService.saveAuthor(this.authorForm.getRawValue())
      .subscribe(
        result => console.log(result)
      );
  }

  getControl(name): AbstractControl {
    return this.authorForm.controls[name];
  }

  getErrorTranslations(): any {
    return this.errorTranslations;
  }
}
