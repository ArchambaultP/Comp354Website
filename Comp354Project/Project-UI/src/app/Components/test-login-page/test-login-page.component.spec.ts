import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLoginPageComponent } from './test-login-page.component';

describe('TestLoginPageComponent', () => {
  let component: TestLoginPageComponent;
  let fixture: ComponentFixture<TestLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
