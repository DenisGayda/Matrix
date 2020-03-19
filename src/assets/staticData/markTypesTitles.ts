enum MarkTypes {
  J1 = 'J1',
  J2 = 'J2',
  J3 = 'J3',
  M1 = 'M1',
  M2 = 'M2',
  S = 'S',
  NO = 'NO',
  TRAINEE= 'TRAINEE',
}

export const markTypesTitles: Record<MarkTypes, string> = {
  [MarkTypes.J1]:  'J1',
  [MarkTypes.J2]:  'J2',
  [MarkTypes.J3]:  'J3',
  [MarkTypes.M1]:  'M1',
  [MarkTypes.M2]:  'M2',
  [MarkTypes.S]:  'S',
  [MarkTypes.NO]:  'Ассесмент ранее не проводился',
  [MarkTypes.TRAINEE]:  'TRAINEE',
};
