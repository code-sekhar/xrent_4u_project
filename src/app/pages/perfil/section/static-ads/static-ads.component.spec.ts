import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticAdsComponent } from './static-ads.component';

describe('StaticAdsComponent', () => {
  let component: StaticAdsComponent;
  let fixture: ComponentFixture<StaticAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticAdsComponent]
    });
    fixture = TestBed.createComponent(StaticAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
