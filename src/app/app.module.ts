import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { OuterComponent } from './components/outer/outer.component';
import { TextComponent } from './components/text/text.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    OuterComponent,
    TextComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
