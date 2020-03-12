import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { OverviewComponent } from './components/overview/overview.component';
import { OverviewHeaderComponent } from './components/overview-header/overview-header.component';
import { HeaderRowComponent } from './components/header-row/header-row.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    OverviewComponent,
    OverviewHeaderComponent,
    SelectComponent,
    HeaderRowComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
