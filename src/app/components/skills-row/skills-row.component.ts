import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Data } from '../table/configs/moke';

type IisString = (item) => boolean;

@Component({
  selector: 'app-skills-row',
  templateUrl: './skills-row.component.html',
  styleUrls: ['./skills-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsRowComponent {
  skillsData = Data.skillsData;

  private isString: IisString = item => {
    return typeof item === 'string';
  };
}
