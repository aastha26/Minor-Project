import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScifilistComponent } from './scifilist.component';

describe('ScifilistComponent', () => {
  let component: ScifilistComponent;
  let fixture: ComponentFixture<ScifilistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScifilistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScifilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
