import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { SkillsRowComponent } from './components/skills-row/skills-row.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
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
