import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonfictionbooklistComponent } from './nonfictionbooklist.component';

describe('NonfictionbooklistComponent', () => {
  let component: NonfictionbooklistComponent;
  let fixture: ComponentFixture<NonfictionbooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonfictionbooklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonfictionbooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
