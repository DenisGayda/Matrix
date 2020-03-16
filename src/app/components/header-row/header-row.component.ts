import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

interface IStringArray {
  [index: number]: string | [];
}

@Component({
  selector: 'app-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderRowComponent {
  @Input() levelDescriptionValue;

  private valuesArray: IStringArray = this.levelDescriptionValue;

  isString(item: IStringArray): boolean {
    return typeof item === 'string';
  }

  makeValuesArray(): IStringArray | string {
    if (this.levelDescriptionValue) {
      return this.valuesArray = Object.values(this.levelDescriptionValue);
    }
  }
}
