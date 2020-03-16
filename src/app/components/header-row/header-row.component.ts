import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

interface IStringArray {
  [index: number]: string;
}

type IisString = (item) => boolean;

@Component({
  selector: 'app-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderRowComponent {
  @Input() levelDescriptionValue;

  private valuesArray: IStringArray = this.levelDescriptionValue;

  public isString: IisString = item => {
    return typeof item === 'string';
  };

  public makeValuesArray: () => IStringArray = () => {
    if (this.levelDescriptionValue) {
      this.valuesArray = Object.values(this.levelDescriptionValue);
    }

    return this.valuesArray;
  }
}
