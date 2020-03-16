import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSoftwareAndDevelopmentProcessComponent } from './header-software-and-development-process.component';

describe('HeaderSoftwareAndDevelopmentProcessComponent', () => {
  let component: HeaderSoftwareAndDevelopmentProcessComponent;
  let fixture: ComponentFixture<HeaderSoftwareAndDevelopmentProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSoftwareAndDevelopmentProcessComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSoftwareAndDevelopmentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
