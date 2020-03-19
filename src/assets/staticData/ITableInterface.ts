import { ICellInterface } from './ICellInterface';

export interface ITableInterface {
  header: ICellInterface;
  description: ICellInterface;
  hardSkills: ICellInterface;
  softSkills: ICellInterface;
  footer: ICellInterface;
}
