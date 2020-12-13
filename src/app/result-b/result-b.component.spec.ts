import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBComponent } from './result-b.component';

describe('ResultBComponent', () => {
  let component: ResultBComponent;
  let fixture: ComponentFixture<ResultBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
