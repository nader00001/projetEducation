import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson12Component } from './lesson12.component';

describe('Lesson12Component', () => {
  let component: Lesson12Component;
  let fixture: ComponentFixture<Lesson12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lesson12Component]
    });
    fixture = TestBed.createComponent(Lesson12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
