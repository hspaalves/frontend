import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAuthorComponent } from './base-author.component';

describe('BaseAuthorComponent', () => {
  let component: BaseAuthorComponent;
  let fixture: ComponentFixture<BaseAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
