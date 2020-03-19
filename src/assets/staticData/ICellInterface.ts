import { FieldTypes } from './FieldTypes';

export interface ICellInterface {
  value: string;
  type: FieldTypes;
  options?: string[];
  rows?: ICellInterface[];
}
