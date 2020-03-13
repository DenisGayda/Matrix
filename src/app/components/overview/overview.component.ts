import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TemporaryData } from '../table/configs/moke';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
    private overview: TemporaryData = TemporaryData.overview;
}
