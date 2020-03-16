import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Data } from '../table/configs/moke';

interface ILevelDescriptionHeader {
  [index: number]: string;
}

@Component({
  selector: 'app-level-description-header',
  templateUrl: './level-description-header.component.html',
  styleUrls: ['./level-description-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelDescriptionHeaderComponent {
  public levelDescriptionHeader: ILevelDescriptionHeader | [] = Data.levelDescriptionHeader;
}
