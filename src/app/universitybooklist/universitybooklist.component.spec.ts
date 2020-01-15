import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitybooklistComponent } from './universitybooklist.component';

describe('UniversitybooklistComponent', () => {
  let component: UniversitybooklistComponent;
  let fixture: ComponentFixture<UniversitybooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitybooklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitybooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
