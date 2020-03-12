import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { TableDataService } from '../../services/table-data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  public user: any = {info: 'some'}

  constructor(public tableDataService: TableDataService) {

  }
  ngOnInit() {
    this.tableDataService.receiveData().subscribe( data => this.changeUser(data));
  }

  changeUser(val) {
    this.user = val;
  }
}
