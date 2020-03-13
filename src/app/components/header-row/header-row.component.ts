import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderRowComponent {
  @Input() column1: string;
  @Input() column2: string | string[];
  @Input() arr: string[];

  getType = (item): boolean => typeof item === 'string';
}
