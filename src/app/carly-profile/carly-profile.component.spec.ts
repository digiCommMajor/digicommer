import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlyProfileComponent } from './carly-profile.component';


describe('CarlyProfileComponent', () => {
  let component: CarlyProfileComponent;
  let fixture: ComponentFixture<CarlyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarlyProfileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
