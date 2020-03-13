// tslint:disable-next-line:interface-name
interface InterfaceData {
  column1: string;
  column2: string | string[];
}

export class TemporaryData {

  static overview: InterfaceData[] = [
    {column1: 'Employee', column2: ''},
    {column1: 'Tech Interview Date', column2: ''},
    {column1: 'Before assessment level', column2: ['', 'J1', 'J2', 'J3', 'M1', 'M2', 'S', 'Ассесмент ранее не проводился', 'Trainee']},
    {column1: 'Project', column2: ''},
    {column1: 'Project/Resource Manager', column2: ['', 'Василенко Виталий', 'Григорьев Александр', 'Педан Александр']},
    {column1: 'Interviewer', column2: ''},
  ];
}
