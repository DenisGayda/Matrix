import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Data } from '../table/configs/moke';

type IIsString = (item) => string;

@Component({
  selector: 'app-skills-row',
  templateUrl: './skills-row.component.html',
  styleUrls: ['./skills-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsRowComponent {
  skillsData = Data.skillsData;

  public isString: IIsString = item => {
    if (Array.isArray(item)) {
      return 'array';
    } else if (typeof item === 'object' && !Array.isArray(item)) {
      return 'object';
    }
  };
}
