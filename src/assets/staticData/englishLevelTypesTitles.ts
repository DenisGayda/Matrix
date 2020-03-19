enum englishLevelTypes {
  ELEMENTARY = 'ELEMENTARY',
  PREINTERMEDIATE = 'PREINTERMEDIATE',
  INTERMEDIATE = 'INTERMEDIATE',
  UPPERINTERMEDIATE = 'UPPERINTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export const englishLevelTypesTitles: Record<englishLevelTypes, string> = {
  [englishLevelTypes.ELEMENTARY]:  'Elementary',
  [englishLevelTypes.PREINTERMEDIATE]:  'Pre-Intermediate',
  [englishLevelTypes.INTERMEDIATE]:  'Intermediate',
  [englishLevelTypes.UPPERINTERMEDIATE]:  'Upper-intermediate',
  [englishLevelTypes.ADVANCED]:  'Advanced',
};
