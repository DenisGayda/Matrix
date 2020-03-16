import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Data } from '../table/configs/moke';

interface IHeaderSADPC {
  [index: number]: string;
}

@Component({
  selector: 'app-header-soft-dev',
  templateUrl: './header-soft-dev.component.html',
  styleUrls: ['./header-software-and-development-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSoftwareAndDevelopmentProcessComponent {
  public headerSADPC: IHeaderSADPC = Data.softwareAndDevelopmentProcessHeader;
}
