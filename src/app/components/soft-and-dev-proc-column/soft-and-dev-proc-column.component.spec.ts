import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftAndDevProcColumnComponent } from './soft-and-dev-proc-column.component';

describe('SoftAndDevProcColumnComponent', () => {
  let component: SoftAndDevProcColumnComponent;
  let fixture: ComponentFixture<SoftAndDevProcColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftAndDevProcColumnComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftAndDevProcColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
