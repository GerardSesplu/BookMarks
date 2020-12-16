import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSignInComponent } from './error-sign-in.component';

describe('ErrorSignInComponent', () => {
  let component: ErrorSignInComponent;
  let fixture: ComponentFixture<ErrorSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
