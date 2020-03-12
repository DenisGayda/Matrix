import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRowComponent } from './header-row.component';
import { SelectComponent } from '../select/select.component';

describe('HeaderRowComponent', () => {
  let component: HeaderRowComponent;
  let fixture: ComponentFixture<HeaderRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRowComponent,  SelectComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
