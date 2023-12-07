import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpManComponent } from './sign-up-man.component';

describe('SignUpManComponent', () => {
  let component: SignUpManComponent;
  let fixture: ComponentFixture<SignUpManComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpManComponent]
    });
    fixture = TestBed.createComponent(SignUpManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
