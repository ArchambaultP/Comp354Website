import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAreaComponent } from './header-area.component';

describe('HeaderAreaComponent', () => {
  let component: HeaderAreaComponent;
  let fixture: ComponentFixture<HeaderAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
