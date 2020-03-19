import { ICellInterface } from './CellInterface';

export interface ITableInterface {
  header: ICellInterface;
  description: ICellInterface;
  hardSkills: ICellInterface;
  softSkills: ICellInterface;
  footer: ICellInterface;
}
