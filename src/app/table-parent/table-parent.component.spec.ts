import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParentComponent } from './table-parent.component';

describe('TableParentComponent', () => {
  let component: TableParentComponent;
  let fixture: ComponentFixture<TableParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableParentComponent]
    });
    fixture = TestBed.createComponent(TableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
