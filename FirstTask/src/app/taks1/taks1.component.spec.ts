import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Taks1Component } from './taks1.component';

describe('Taks1Component', () => {
  let component: Taks1Component;
  let fixture: ComponentFixture<Taks1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Taks1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Taks1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
