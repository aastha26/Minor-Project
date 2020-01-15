import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonfictionlistComponent } from './nonfictionlist.component';

describe('NonfictionlistComponent', () => {
  let component: NonfictionlistComponent;
  let fixture: ComponentFixture<NonfictionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonfictionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonfictionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
