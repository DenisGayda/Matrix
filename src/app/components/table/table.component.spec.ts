import { async, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { LevelDescriptionHeaderComponent } from '../level-description-header/level-description-header.component';
import { HeaderRowComponent } from '../header-row/header-row.component';
import { HeaderSoftwareAndDevelopmentProcessComponent } from '../header-soft-dev/header-software-and-development-process.component';

describe('TableComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        LevelDescriptionHeaderComponent,
        HeaderRowComponent,
        HeaderSoftwareAndDevelopmentProcessComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
