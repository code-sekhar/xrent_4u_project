import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSideBerComponent } from './portal-side-ber.component';

describe('PortalSideBerComponent', () => {
  let component: PortalSideBerComponent;
  let fixture: ComponentFixture<PortalSideBerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalSideBerComponent]
    });
    fixture = TestBed.createComponent(PortalSideBerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
