import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgmdpDevlog1Component } from './rpgmdp-devlog1.component';

describe('RpgmdpDevlog1Component', () => {
  let component: RpgmdpDevlog1Component;
  let fixture: ComponentFixture<RpgmdpDevlog1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpgmdpDevlog1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgmdpDevlog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
