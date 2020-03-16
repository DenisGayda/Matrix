import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { LevelDescriptionHeaderComponent } from './components/level-description-header/level-description-header.component';
import { HeaderRowComponent } from './components/header-row/header-row.component';
// tslint:disable-next-line:max-line-length
import { HeaderSoftwareAndDevelopmentProcessComponent } from './components/header-software-and-development-process/header-software-and-development-process.component';
import { SoftAndDevProcColumnComponent } from './components/soft-and-dev-proc-column/soft-and-dev-proc-column.component';
import { SkillsRowComponent } from './components/skills-row/skills-row.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LevelDescriptionHeaderComponent,
    HeaderRowComponent,
    HeaderSoftwareAndDevelopmentProcessComponent,
    SoftAndDevProcColumnComponent,
    SkillsRowComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
