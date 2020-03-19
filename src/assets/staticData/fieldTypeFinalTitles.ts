import { FieldTypes } from './FieldTypes';

export const fieldTypeFinalTitles: Record<FieldTypes, string | string[]> = {
  [FieldTypes.INPUT]: '',
  [FieldTypes.TEXT]: '',
  [FieldTypes.SELECT]: ['J1', 'J2', 'J3', 'M1', 'M2', 'S', 'Ассесмент ранее не проводился', 'Trainee'],
  [FieldTypes.CONTAINER]: '',
};
