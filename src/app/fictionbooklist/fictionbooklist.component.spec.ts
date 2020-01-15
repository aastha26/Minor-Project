import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionbooklistComponent } from './fictionbooklist.component';

describe('FictionbooklistComponent', () => {
  let component: FictionbooklistComponent;
  let fixture: ComponentFixture<FictionbooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictionbooklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionbooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
