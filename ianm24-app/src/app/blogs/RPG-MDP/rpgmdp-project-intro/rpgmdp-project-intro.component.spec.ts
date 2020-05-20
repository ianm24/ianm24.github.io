import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgmdpProjectIntroComponent } from './rpgmdp-project-intro.component';

describe('RpgmdpProjectIntroComponent', () => {
  let component: RpgmdpProjectIntroComponent;
  let fixture: ComponentFixture<RpgmdpProjectIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpgmdpProjectIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgmdpProjectIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
