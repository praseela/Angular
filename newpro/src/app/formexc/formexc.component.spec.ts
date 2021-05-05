import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormexcComponent } from './formexc.component';

describe('FormexcComponent', () => {
  let component: FormexcComponent;
  let fixture: ComponentFixture<FormexcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormexcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormexcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
