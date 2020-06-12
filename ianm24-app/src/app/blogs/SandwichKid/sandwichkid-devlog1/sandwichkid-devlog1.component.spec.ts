import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichkidDevlog1Component } from './sandwichkid-devlog1.component';

describe('SandwichkidDevlog1Component', () => {
  let component: SandwichkidDevlog1Component;
  let fixture: ComponentFixture<SandwichkidDevlog1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandwichkidDevlog1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwichkidDevlog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
