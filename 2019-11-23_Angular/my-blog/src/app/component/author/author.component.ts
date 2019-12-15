import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PostService} from '../../service/post/post.service';
import {AuthorService} from '../../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  authorForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authorService: AuthorService) { }

  ngOnInit() {
    this.authorForm = this.fb.group({
        id: [''],
        firstName: [''],
        lastName: [''],
        date: [''],
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


