import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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
        firstName: [''],
        lastName: ['']
      }
    );
  }

  onSubmit($event) {
    console.log(this.authorForm.getRawValue());
    this.authorService.saveAuthor(this.authorForm.getRawValue())
      .subscribe(
        result => console.log(result)
      );
  }
}
