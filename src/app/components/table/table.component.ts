import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Data } from './configs/moke';

interface ITableComponent {
  [index: number]: {};
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  private levelDescription: ITableComponent = Data.levelDescription;
}
