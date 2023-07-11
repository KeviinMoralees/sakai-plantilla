import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsSeePageComponent } from './stations-see-page.component';

describe('StationsSeePageComponent', () => {
  let component: StationsSeePageComponent;
  let fixture: ComponentFixture<StationsSeePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StationsSeePageComponent]
    });
    fixture = TestBed.createComponent(StationsSeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
