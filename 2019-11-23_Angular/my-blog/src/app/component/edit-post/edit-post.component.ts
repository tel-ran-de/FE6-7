import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../service/post/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private fb: FormBuilder,
              private postService: PostService) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      id: [],
      title: ['Sample title'],
      body: [''],
      date: ['']
      }
    );
  }

  onSubmit($event) {
    console.log(this.postForm.getRawValue());
    this.postService.savePost(this.postForm.getRawValue())
      .subscribe(
        result => console.log(result)
      );
  }
}
