import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePostComponent } from './sample-post.component';

describe('SamplePostComponent', () => {
  let component: SamplePostComponent;
  let fixture: ComponentFixture<SamplePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
