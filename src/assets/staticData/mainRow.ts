import { FieldTypes } from './FieldTypes';
import { levelTypesTitles } from './levelTypesTitles';

export const mainRow = [
  {
    value: 'Self-assessment',
    type: FieldTypes.SELECT,
    options: Object.values(levelTypesTitles),
  },
  {
    value: 'CURRENT LEVEL',
    type: FieldTypes.SELECT,
    options: Object.values(levelTypesTitles),
  },
  {
    value: 'NEXT LEVEL',
    type: FieldTypes.SELECT,
    options: Object.values(levelTypesTitles),
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
