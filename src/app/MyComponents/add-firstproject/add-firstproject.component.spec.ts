import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFirstprojectComponent } from './add-firstproject.component';

describe('AddFirstprojectComponent', () => {
  let component: AddFirstprojectComponent;
  let fixture: ComponentFixture<AddFirstprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFirstprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFirstprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
