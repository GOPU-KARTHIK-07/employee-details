import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailsComponent } from './emp-details.component';

describe('EmpDetailsComponent', () => {
  let component: EmpDetailsComponent;
  let fixture: ComponentFixture<EmpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
