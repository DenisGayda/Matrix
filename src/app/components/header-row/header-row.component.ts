import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderRowComponent {
  @Input() column1;
  @Input() column2;

  typeof(item){
    if(typeof item === 'string') { return true };
    return false;
  }
}
