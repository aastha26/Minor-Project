import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerlistComponent } from './engineerlist.component';

describe('EngineerlistComponent', () => {
  let component: EngineerlistComponent;
  let fixture: ComponentFixture<EngineerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
