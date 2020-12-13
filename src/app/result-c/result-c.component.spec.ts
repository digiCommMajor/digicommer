import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCComponent } from './result-c.component';

describe('ResultCComponent', () => {
  let component: ResultCComponent;
  let fixture: ComponentFixture<ResultCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
