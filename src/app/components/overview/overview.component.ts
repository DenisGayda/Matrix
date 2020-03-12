import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  public arr: Array<string> = ['Employee', 'Tech Interview Date', 'Before assessment level', 'Project', 'Project/Resource Manager', 'Interviewer'];
  public skills:  Array<string> = ['', 'J1', 'J2', 'J3', 'M1', 'M2', 'S', 'Ассесмент ранее не проводился', 'Trainee'];
  public managers: Array<string> = ['', 'Василенко Виталий', 'Григорьев Александр', 'Педан Александр'];
}
