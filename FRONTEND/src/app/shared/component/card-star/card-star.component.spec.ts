import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStarComponent } from './card-star.component';

describe('CardStarComponent', () => {
  let component: CardStarComponent;
  let fixture: ComponentFixture<CardStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
