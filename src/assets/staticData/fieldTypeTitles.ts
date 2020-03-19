import { FieldTypes } from './FieldTypes';

export const fieldTypeTitles: Record<FieldTypes, string | string[]> = {
  [FieldTypes.INPUT]: '',
  [FieldTypes.TEXT]: '',
  [FieldTypes.SELECT]: ['-', 'None', 'Novice', 'Intermediate', 'Advanced'],
  [FieldTypes.CONTAINER]: '',
};
