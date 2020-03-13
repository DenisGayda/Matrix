import { async, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { OverviewComponent } from '../overview/overview.component';
import { OverviewHeaderComponent } from '../overview-header/overview-header.component';
import { SelectComponent } from '../select/select.component';
import { HeaderRowComponent } from '../header-row/header-row.component';

describe('TableComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        OverviewComponent,
        OverviewHeaderComponent,
        SelectComponent,
        HeaderRowComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
