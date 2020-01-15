import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionlistComponent } from './fictionlist.component';

describe('FictionlistComponent', () => {
  let component: FictionlistComponent;
  let fixture: ComponentFixture<FictionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
