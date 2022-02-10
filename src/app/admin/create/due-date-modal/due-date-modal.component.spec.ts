import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDateModalComponent } from './due-date-modal.component';

describe('DueDateModalComponent', () => {
  let component: DueDateModalComponent;
  let fixture: ComponentFixture<DueDateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueDateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DueDateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
