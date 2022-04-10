import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstprojectItemComponent } from './firstproject-item.component';

describe('FirstprojectItemComponent', () => {
  let component: FirstprojectItemComponent;
  let fixture: ComponentFixture<FirstprojectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstprojectItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstprojectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
