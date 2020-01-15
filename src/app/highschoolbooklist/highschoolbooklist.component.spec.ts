import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighschoolbooklistComponent } from './highschoolbooklist.component';

describe('HighschoolbooklistComponent', () => {
  let component: HighschoolbooklistComponent;
  let fixture: ComponentFixture<HighschoolbooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighschoolbooklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighschoolbooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
