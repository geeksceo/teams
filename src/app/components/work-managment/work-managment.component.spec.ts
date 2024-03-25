import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkManagmentComponent } from './work-managment.component';

describe('WorkManagmentComponent', () => {
  let component: WorkManagmentComponent;
  let fixture: ComponentFixture<WorkManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkManagmentComponent]
    });
    fixture = TestBed.createComponent(WorkManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
