import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorRemoveComponent } from './author-remove.component';

describe('AuthorRemoveComponent', () => {
  let component: AuthorRemoveComponent;
  let fixture: ComponentFixture<AuthorRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
