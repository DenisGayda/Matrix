import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Data } from '../table/configs/moke';

interface IHeaderSADPC {
  [index: number]: string;
}

@Component({
  selector: 'app-header-software-and-development-process',
  templateUrl: './header-software-and-development-process.component.html',
  styleUrls: ['./header-software-and-development-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSoftwareAndDevelopmentProcessComponent {
  private headerSADPC: IHeaderSADPC = Data.softwareAndDevelopmentProcessHeader;
}
