import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUsingNgContentComponent } from './course-using-ng-content.component';

describe('CourseUsingNgContentComponent', () => {
  let component: CourseUsingNgContentComponent;
  let fixture: ComponentFixture<CourseUsingNgContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseUsingNgContentComponent]
    });
    fixture = TestBed.createComponent(CourseUsingNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
