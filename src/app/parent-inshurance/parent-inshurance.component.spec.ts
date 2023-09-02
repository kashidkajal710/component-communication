import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInshuranceComponent } from './parent-inshurance.component';

describe('ParentInshuranceComponent', () => {
  let component: ParentInshuranceComponent;
  let fixture: ComponentFixture<ParentInshuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentInshuranceComponent]
    });
    fixture = TestBed.createComponent(ParentInshuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
