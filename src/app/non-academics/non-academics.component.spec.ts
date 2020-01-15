import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAcademicsComponent } from './non-academics.component';

describe('NonAcademicsComponent', () => {
  let component: NonAcademicsComponent;
  let fixture: ComponentFixture<NonAcademicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAcademicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAcademicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
