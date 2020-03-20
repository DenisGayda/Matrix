import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OuterComponent { }
