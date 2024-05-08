import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leson4Component } from './leson4.component';

describe('Leson4Component', () => {
  let component: Leson4Component;
  let fixture: ComponentFixture<Leson4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Leson4Component]
    });
    fixture = TestBed.createComponent(Leson4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
