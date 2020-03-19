export interface ICellInterface {
  value: string | string[];
  type: FieldTypes;
  options?: string[];
  rows?: ICellInterface[];
}
