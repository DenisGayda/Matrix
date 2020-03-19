import { async, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { InputComponent } from '../input/input.component';
import { TextComponent } from '../text/text.component';
import { SelectComponent } from '../select/select.component';

describe('TableComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        InputComponent,
        TextComponent,
        SelectComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
