import { async, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { LevelDescriptionHeaderComponent } from '../level-description-header/level-description-header.component';
import { HeaderRowComponent } from '../header-row/header-row.component';
import { HeaderSoftwareAndDevelopmentProcessComponent } from '../header-software-and-development-process/header-software-and-development-process.component';
import { SoftAndDevProcColumnComponent } from '../soft-and-dev-proc-column/soft-and-dev-proc-column.component';
import { SkillsRowComponent } from '../skills-row/skills-row.component';

describe('TableComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        LevelDescriptionHeaderComponent,
        HeaderRowComponent,
        HeaderSoftwareAndDevelopmentProcessComponent,
        SoftAndDevProcColumnComponent,
        SkillsRowComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
