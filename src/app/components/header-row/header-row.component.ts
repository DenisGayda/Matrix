import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderRowComponent {
  @Input() obj;

  arr = [];

  typeof(item) {
    return typeof item === 'string';
  }

  makeArr() {
    for (const key in this.obj) {
      if (this.obj.hasOwnProperty(key)) {
      this.arr.push(this.obj[key]);
      }
    }

    return this.arr;
  }
}
