import { FieldTypes } from './FieldTypes';
import { fieldTypeTitles } from './fieldTypeTitles';

export const mainRow = [
  {
    value: 'Self-assessment',
    type: FieldTypes.SELECT,
    options: Object.values(fieldTypeTitles),
  },
  {
    value: 'CURRENT LEVEL',
    type: FieldTypes.SELECT,
    options: Object.values(fieldTypeTitles),
  },
  {
    value: 'NEXT LEVEL',
    type: FieldTypes.SELECT,
    options: Object.values(fieldTypeTitles),
  },
  {
    value: 'COMMENTS',
    type: FieldTypes.INPUT,
  },
  {
    value: 'Literature',
    type: FieldTypes.TEXT,
  },
];
