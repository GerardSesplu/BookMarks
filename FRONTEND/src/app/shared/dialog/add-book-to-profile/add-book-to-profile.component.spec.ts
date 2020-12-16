import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookToProfileComponent } from './add-book-to-profile.component';

describe('AddBookToProfileComponent', () => {
  let component: AddBookToProfileComponent;
  let fixture: ComponentFixture<AddBookToProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookToProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookToProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
