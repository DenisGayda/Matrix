import { FieldTypes } from './FieldTypes';

export const fieldTypeEnglishTitles: Record<FieldTypes, string | string[]> = {
  [FieldTypes.INPUT]: '',
  [FieldTypes.TEXT]: '',
  [FieldTypes.SELECT]: ['Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper-intermediate', 'Advanced'],
  [FieldTypes.CONTAINER]: '',
};
