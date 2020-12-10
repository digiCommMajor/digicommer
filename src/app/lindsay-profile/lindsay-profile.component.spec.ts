import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LindsayProfileComponent } from './lindsay-profile.component';

describe('LindsayProfileComponent', () => {
  let component: LindsayProfileComponent;
  let fixture: ComponentFixture<LindsayProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LindsayProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LindsayProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
