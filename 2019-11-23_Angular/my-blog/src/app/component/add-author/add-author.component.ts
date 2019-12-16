import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthorService} from '../../service/author/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {

  authorForm: FormGroup;


  constructor(private fb: FormBuilder,
              private authorService: AuthorService) { }

  ngOnInit() {
    this.authorForm = this.fb.group({
        id: [],
        firstName: [''],
        lastName: [''],
        email: ['']
      }
    );
  }

  onSubmit($event) {
    console.log(this.authorForm.getRawValue());
    this.authorService.addAuthor(this.authorForm.getRawValue())
      .subscribe(
        result => console.log(result)
      );
  }

}
