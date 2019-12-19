import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorService} from '../../service/author/author.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit {

  authorForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authorService: AuthorService) { }

  ngOnInit() {
    this.authorForm = this.fb.group({
        id: [],
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['']
      }
    );

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

  errorTranslations(): any {
    return  {
      required: 'This field is required',
      minLength: 'Min length for this field is {{requiredLength}}'
    };
  }
}
