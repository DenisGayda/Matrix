import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderRowComponent {
  @Input() levelDescriptionValue;

  valuesArray = [];

  typeof(item) {
    return typeof item === 'string';
  }

  makeValuesArray() {
    if (this.levelDescriptionValue) {
      this.valuesArray = Object.values(this.levelDescriptionValue);
    }

    return this.valuesArray;
  }
}
