import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post4Component } from './post4.component';

describe('Post4Component', () => {
  let component: Post4Component;
  let fixture: ComponentFixture<Post4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
