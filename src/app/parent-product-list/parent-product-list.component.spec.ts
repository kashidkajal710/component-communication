import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentProductListComponent } from './parent-product-list.component';

describe('ParentProductListComponent', () => {
  let component: ParentProductListComponent;
  let fixture: ComponentFixture<ParentProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentProductListComponent]
    });
    fixture = TestBed.createComponent(ParentProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
