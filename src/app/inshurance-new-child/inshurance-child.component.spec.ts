import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InshuranceChildComponent } from './inshurance-child.component';

describe('InshuranceChildComponent', () => {
  let component: InshuranceChildComponent;
  let fixture: ComponentFixture<InshuranceChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InshuranceChildComponent]
    });
    fixture = TestBed.createComponent(InshuranceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
