import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Data } from '../table/configs/moke';

interface ISofAndDevProcColumn {
  [index: number]: string;
}

@Component({
  selector: 'app-soft-and-dev-proc-column',
  templateUrl: './soft-and-dev-proc-column.component.html',
  styleUrls: ['./soft-and-dev-proc-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoftAndDevProcColumnComponent {
  public sofAndDevProcColumn: ISofAndDevProcColumn = Data.sofAndDevProcColumn;
}
