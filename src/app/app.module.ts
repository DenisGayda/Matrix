import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        InputComponent,
    ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
