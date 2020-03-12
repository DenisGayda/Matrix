import { async, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { OverviewComponent } from '../overview/overview.component';

describe('TableComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        OverviewComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
