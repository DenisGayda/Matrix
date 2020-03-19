enum levelTypes {
  NOEXIST = 'NOEXIST',
  NONE = 'NONE',
  NOVICE = 'NOVICE',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export const levelTypesTitles: Record<levelTypes, string> = {
  [levelTypes.NOEXIST]:  '-',
  [levelTypes.NONE]:  'None',
  [levelTypes.NOVICE]:  'Novice',
  [levelTypes.INTERMEDIATE]:  'Intermediate',
  [levelTypes.ADVANCED]:  'Advanced',
};
