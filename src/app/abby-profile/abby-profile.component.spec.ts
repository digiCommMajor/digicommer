import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbyProfileComponent } from './abby-profile.component';

describe('AbbyProfileComponent', () => {
  let component: AbbyProfileComponent;
  let fixture: ComponentFixture<AbbyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
