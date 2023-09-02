import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InshuranceTypechildComponent } from './inshurance-typechild.component';

describe('InshuranceTypechildComponent', () => {
  let component: InshuranceTypechildComponent;
  let fixture: ComponentFixture<InshuranceTypechildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InshuranceTypechildComponent]
    });
    fixture = TestBed.createComponent(InshuranceTypechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
