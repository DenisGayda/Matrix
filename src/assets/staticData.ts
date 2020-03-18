enum FieldTypes {
    INPUT = 'INPUT',
    TEXT = 'TEXT',
    SELECT = 'SELECT',
}

enum FieldSize {
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
}
interface ISomeInterface {
    value: string;
    type: FieldTypes;
    options?: string[];
    width: FieldSize;
    rows?: ISomeInterface[];
}

interface ITableInterface {
    header: ISomeInterface;
    techSkills: ISomeInterface;
    softSkills: ISomeInterface;
    footer: ISomeInterface;
}
const mainRow = [
  {
    value: 'Self-assessment',
    type: FieldTypes.SELECT,
    width: FieldSize.MEDIUM,
    options: ['-', 'None', 'Novice', 'Intermediate', 'Advanced'],
  },
  {
    value: 'CURRENT LEVEL',
    type: FieldTypes.SELECT,
    width: FieldSize.MEDIUM,
    options: ['-', 'None', 'Novice', 'Intermediate', 'Advanced'],
  },
  {
    value: 'NEXT LEVEL',
    type: FieldTypes.SELECT,
    width: FieldSize.MEDIUM,
    options: ['-', 'None', 'Novice', 'Intermediate', 'Advanced'],
  },
  {
    value: 'COMMENTS',
    type: FieldTypes.INPUT,
    width: FieldSize.MEDIUM,
  },
  {
    value: 'Literature',
    type: FieldTypes.TEXT,
    width: FieldSize.MEDIUM,
  },
];

const data: ISomeInterface = {
    value: 'Software Engineering Practices',
    type: FieldTypes.TEXT,
    width: FieldSize.MEDIUM,
    rows: [
        {
        value: 'Architecture knowledge',
        type: FieldTypes.TEXT,
        width: FieldSize.MEDIUM,
        rows: [
            {
              value: 'OOP',
              type: FieldTypes.TEXT,
              width: FieldSize.MEDIUM,
              rows: mainRow,
            },
            {
              value: 'Functional Programming',
              type: FieldTypes.TEXT,
              width: FieldSize.MEDIUM,
              rows: mainRow,
            },
            {
              value: 'SOLID',
              type: FieldTypes.TEXT,
              width: FieldSize.MEDIUM,
              rows: mainRow,
            },
            {
              value: 'Design Patterns',
              type: FieldTypes.TEXT,
              width: FieldSize.MEDIUM,
              rows: mainRow,
            },
            {
              value: 'DDD',
              type: FieldTypes.TEXT,
              width: FieldSize.MEDIUM,
              rows: mainRow,
            },
            {
              value: 'Event Sourcing',
              type: FieldTypes.TEXT,
              width: FieldSize.MEDIUM,
              rows: mainRow,
            },
            {
              value: 'Microservices architechure',
              type: FieldTypes.TEXT,
              width: FieldSize.MEDIUM,
              rows: mainRow,
            },
            {
              value: 'Architecture of highloaded applications',
              type: FieldTypes.TEXT,
              width: FieldSize.MEDIUM,
              rows: mainRow,
            },
        ],
        },
        {
            value: 'Code Standards&Code Review Process',
            type: FieldTypes.TEXT,
            width: FieldSize.MEDIUM,
            rows: [
                {
                  value: 'Code Standards',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Code Smells',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Refactoring',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Code Review Process&Experience',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
            ],
        },
        {
            value: 'Algorithms and data structures',
            type: FieldTypes.TEXT,
            width: FieldSize.MEDIUM,
            rows: [
                {
                  value: 'Big-O Notation for Algorithm Complexity',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Data Structures',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Basic fundamental algorithms',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Data Science',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Big Data',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Machine Learning&AI',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
            ],
        },
        {
            value: 'Continuous Integration&Continuous Delivery & Deployment',
            type: FieldTypes.TEXT,
            width: FieldSize.MEDIUM,
            rows: [
                {
                  value: 'TFS, TeamCity, Jenkins',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Build modes',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Pull/Merge requests validation',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'SonarQube',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Tests running',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Build files transfer',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Server build version update',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Notifications',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
            ],
        },
        {
            value: 'Testing',
            type: FieldTypes.TEXT,
            width: FieldSize.MEDIUM,
            rows: [
                {
                  value: 'Unit Testing',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Integration Testing',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Automation Testing',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Perfomance Testing',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Security Testing',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Testing Frameworks',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Fakes',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Attributes, Assertions, FluentAssertions',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Gherkin',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'TDD',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'BDD',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Reports',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
            ],
        },
        {
            value: 'Troubleshooting/Logging/Monitoring',
            type: FieldTypes.TEXT,
            width: FieldSize.MEDIUM,
            rows: [
                {
                  value: 'Debugging',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Logging process',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Profiling',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
                {
                  value: 'Profilers',
                  type: FieldTypes.TEXT,
                  width: FieldSize.MEDIUM,
                  rows: mainRow,
                },
            ],
        },
        ],
};
