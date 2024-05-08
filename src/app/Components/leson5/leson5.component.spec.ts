import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leson5Component } from './leson5.component';

describe('Leson5Component', () => {
  let component: Leson5Component;
  let fixture: ComponentFixture<Leson5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Leson5Component]
    });
    fixture = TestBed.createComponent(Leson5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
