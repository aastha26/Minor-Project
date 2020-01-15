import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomancelistComponent } from './romancelist.component';

describe('RomancelistComponent', () => {
  let component: RomancelistComponent;
  let fixture: ComponentFixture<RomancelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomancelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
