import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { LevelDescriptionHeaderComponent } from './components/level-description-header/level-description-header.component';
import { HeaderRowComponent } from './components/header-row/header-row.component';
import { SoftAndDevProcColumnComponent } from './components/soft-and-dev-proc-column/soft-and-dev-proc-column.component';
import { HeaderSoftDevComponent } from './components/header-soft-dev/header-software-and-development-process.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LevelDescriptionHeaderComponent,
    HeaderRowComponent,
    HeaderSoftDevComponent,
    SoftAndDevProcColumnComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
