import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPlaceholderComponent } from './post-placeholder.component';

describe('PostPlaceholderComponent', () => {
  let component: PostPlaceholderComponent;
  let fixture: ComponentFixture<PostPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
