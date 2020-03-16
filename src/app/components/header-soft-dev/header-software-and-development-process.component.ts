import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Data } from '../table/configs/moke';

interface IHeaderSADPC {
  [index: number]: string;
}

@Component({
  selector: 'app-header-soft-dev',
  templateUrl: './header-soft-dev.component.html',
  styleUrls: ['./header-soft-dev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSoftDevComponent {
  public headerSADPC: IHeaderSADPC = Data.softwareAndDevelopmentProcessHeader;
}
