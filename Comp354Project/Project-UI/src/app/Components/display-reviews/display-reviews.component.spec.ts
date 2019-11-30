import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReviewsComponent } from './display-reviews.component';

describe('DisplayReviewsComponent', () => {
  let component: DisplayReviewsComponent;
  let fixture: ComponentFixture<DisplayReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
