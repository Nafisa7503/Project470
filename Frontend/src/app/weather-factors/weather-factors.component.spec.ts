import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFactorsComponent } from './weather-factors.component';

describe('WeatherFactorsComponent', () => {
  let component: WeatherFactorsComponent;
  let fixture: ComponentFixture<WeatherFactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherFactorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
