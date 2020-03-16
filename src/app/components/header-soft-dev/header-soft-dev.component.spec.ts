import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderSoftDevComponent } from './header-software-and-development-process.component';

describe('HeaderSoftDevComponent', () => {
  let component: HeaderSoftDevComponent;
  let fixture: ComponentFixture<HeaderSoftDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSoftDevComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSoftDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
