import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TextComponent } from './components/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TextComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
