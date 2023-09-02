import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InshuranceNewParentComponent } from './inshurance-new-parent.component';

describe('InshuranceNewParentComponent', () => {
  let component: InshuranceNewParentComponent;
  let fixture: ComponentFixture<InshuranceNewParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InshuranceNewParentComponent]
    });
    fixture = TestBed.createComponent(InshuranceNewParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
