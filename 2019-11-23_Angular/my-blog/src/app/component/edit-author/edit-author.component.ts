import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorService} from '../../service/author/author.service';


@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit {

  authorForm: FormGroup;
  control: AbstractControl;
  errorTexts: any;
  constructor(private fb: FormBuilder,
              private authorService: AuthorService) {
  }

  ngOnInit() {
    this.authorForm = this.fb.group({
        id: [],
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['']
      }
    );
    console.log(this.authorForm);
    this.control = this.authorForm.controls.firstName;
    this.errorTexts = {
      required: 'This field is required',
      minLength: 'Min length for this field is '
      /*minLength: 'Min length must be 3' + this.authorForm.controls.firstName.errors.minlength.requiredLength*/
    };
  }
  onSubmit($event) {
    console.log(this.authorForm.getRawValue());
    this.authorService.saveAuthor(this.authorForm.getRawValue())
      .subscribe(
        result => console.log(result)
      );
  }
}
