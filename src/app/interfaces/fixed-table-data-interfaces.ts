interface ISkillsData {
  Level: string[];
}

interface IGeneralAssessmentPoints {
  'Software Engineering Practices': {
    'Architecture knowledge': string[];
    'Code Standards&Code Review Process': string[];
    'Algorithms and data structures': string [];
    'Continuous Integration&Continuous Delivery & Deployment': string[];
    'Testing': string[];
    'Troubleshooting/Logging/Monitoring': string[];
  };
  'Software Development Processes': {
    'Version Control System(Git,tfs...)': string[];
    'Estimations': string[];
    'Development metodologies': string[];
  };
}

interface IDevelopmentPoints {
  'JS': string[];
  'Framework Knowledges / Angular': string[];
  'HTML&CSS': string[];
}

export type tableData = string[] | ISkillsData | IGeneralAssessmentPoints | IDevelopmentPoints;
