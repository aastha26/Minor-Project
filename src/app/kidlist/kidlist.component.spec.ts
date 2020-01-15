import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidlistComponent } from './kidlist.component';

describe('KidlistComponent', () => {
  let component: KidlistComponent;
  let fixture: ComponentFixture<KidlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
