import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Data } from '../table/configs/moke';

type ICase = ([] | {} | string);

@Component({
  selector: 'app-skills-row',
  templateUrl: './skills-row.component.html',
  styleUrls: ['./skills-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsRowComponent {
  skillsData = Data.skillsData;

  case(item: ICase): string {
    if (Array.isArray(item)) {
      return 'array';
    }
    if (typeof item === 'object' && !Array.isArray(item)) {
      return 'object';
    }

    return 'string';
  }
}
