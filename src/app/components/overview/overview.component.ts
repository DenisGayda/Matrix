import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit {


  constructor(private data: TableService) { }

  ngOnInit() {
  }

}
