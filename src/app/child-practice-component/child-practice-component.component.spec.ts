import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPracticeComponentComponent } from './child-practice-component.component';

describe('ChildPracticeComponentComponent', () => {
  let component: ChildPracticeComponentComponent;
  let fixture: ComponentFixture<ChildPracticeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildPracticeComponentComponent]
    });
    fixture = TestBed.createComponent(ChildPracticeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
