import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P0220Component } from './p0220.component';

describe('P0220Component', () => {
  let component: P0220Component;
  let fixture: ComponentFixture<P0220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P0220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P0220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
