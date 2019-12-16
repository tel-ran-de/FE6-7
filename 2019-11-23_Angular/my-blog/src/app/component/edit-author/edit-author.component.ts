import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PostService} from '../../service/post/post.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit {

  authorForm: FormGroup;

  constructor(private fb: FormBuilder,
              private postService: PostService ) {}

  ngOnInit() {
    this.authorForm = this.fb.group({
        id: [],
      firstName: ['First Name'],
      lastName: ['Last Name']
      }
    );
  }

  onSubmit($event: MouseEvent) {
    console.log(this.authorForm.getRawValue());
    this.postService.saveAuthor(this.authorForm.getRawValue())
      .subscribe(
        result => console.log(result)
      );
  }
}
