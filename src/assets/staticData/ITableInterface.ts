import { IContainerInterface } from './IContainerInterface';

export interface ITableInterface {
  header: IContainerInterface;
  description: IContainerInterface;
  hardSkills: IContainerInterface;
  softSkills: IContainerInterface;
  footer: IContainerInterface;
}
