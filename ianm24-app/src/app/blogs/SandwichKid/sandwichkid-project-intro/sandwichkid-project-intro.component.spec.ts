import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichkidProjectIntroComponent } from './sandwichkid-project-intro.component';

describe('SandwichkidProjectIntroComponent', () => {
  let component: SandwichkidProjectIntroComponent;
  let fixture: ComponentFixture<SandwichkidProjectIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandwichkidProjectIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwichkidProjectIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
