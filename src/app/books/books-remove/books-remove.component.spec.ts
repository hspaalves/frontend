import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRemoveComponent } from './books-remove.component';

describe('BooksRemoveComponent', () => {
  let component: BooksRemoveComponent;
  let fixture: ComponentFixture<BooksRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
