import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Data } from './configs/moke';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {

  levelDescription = Data.levelDescription;
}
