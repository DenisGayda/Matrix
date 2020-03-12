import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { TableDataService } from '../../services/table-data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {


  constructor(public tableDataService: TableDataService) {

  }
  ngOnInit(){

  }

}
