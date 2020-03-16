import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skills-row',
  templateUrl: './skills-row.component.html',
  styleUrls: ['./skills-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
