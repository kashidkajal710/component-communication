import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPracticeComponentComponent } from './parent-practice-component.component';

describe('ParentPracticeComponentComponent', () => {
  let component: ParentPracticeComponentComponent;
  let fixture: ComponentFixture<ParentPracticeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentPracticeComponentComponent]
    });
    fixture = TestBed.createComponent(ParentPracticeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
