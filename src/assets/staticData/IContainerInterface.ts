import { FieldTypes } from './FieldTypes';
import { ICellInterface } from './ICellInterface';

export interface IContainerInterface {
  title: string[];
  type: FieldTypes;
  rows: ICellInterface[];
}
