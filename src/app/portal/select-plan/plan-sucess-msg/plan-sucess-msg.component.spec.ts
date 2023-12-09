import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSucessMsgComponent } from './plan-sucess-msg.component';

describe('PlanSucessMsgComponent', () => {
  let component: PlanSucessMsgComponent;
  let fixture: ComponentFixture<PlanSucessMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanSucessMsgComponent]
    });
    fixture = TestBed.createComponent(PlanSucessMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
