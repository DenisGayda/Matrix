interface IOverviewData {
  employee: string;
  date: string;
  level: string;
  project: string;
  manager: string;
  interviewer: string;
}
interface ISkillsData {
  level: string[];
}

export type jsonData = IOverviewData | ISkillsData;
