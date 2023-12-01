import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingsOfWeekComponent } from './kings-of-week.component';

describe('KingsOfWeekComponent', () => {
  let component: KingsOfWeekComponent;
  let fixture: ComponentFixture<KingsOfWeekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KingsOfWeekComponent]
    });
    fixture = TestBed.createComponent(KingsOfWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
