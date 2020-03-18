enum FieldTypes {
    INPUT = 'INPUT',
    TEXT = 'TEXT',
    SELECT = 'SELECT',
    CONTAINER = 'CONTAINER',
}

enum FieldSize {
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
}
interface ISomeInterface {
    value: string | string[];
    type: FieldTypes;
    options?: string[];
    width?: FieldSize;
    rows?: ISomeInterface[];
}

interface ITableInterface {
    header: ISomeInterface;
    description: ISomeInterface;
    hardSkills: ISomeInterface;
    softSkills: ISomeInterface;
    footer: ISomeInterface;
}

const skillLevels = ['-', 'None', 'Novice', 'Intermediate', 'Advanced'];
const englishLevels = ['Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper-intermediate', 'Advanced'];

const mainRow = [
  {
    value: 'Self-assessment',
    type: FieldTypes.SELECT,
    width: FieldSize.MEDIUM,
    options: [...skillLevels],
  },
  {
    value: 'CURRENT LEVEL',
    type: FieldTypes.SELECT,
    width: FieldSize.MEDIUM,
    options: [...skillLevels],
  },
  {
    value: 'NEXT LEVEL',
    type: FieldTypes.SELECT,
    width: FieldSize.MEDIUM,
    options: [...skillLevels],
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

const table: ITableInterface = {
  header: {
        value: 'Overview',
        type: FieldTypes.CONTAINER,
        rows: [
          {
            value: 'Employee',
            type: FieldTypes.TEXT,
            rows: [{
              value: '',
              type: FieldTypes.INPUT,
            }],
          },
          {
            value: 'Tech Interview Date',
            type: FieldTypes.TEXT,
            rows: [{
              value: '',
              type: FieldTypes.INPUT,
            }],
          },
          {
            value: 'Before assessment level',
            type: FieldTypes.TEXT,
            rows: [{
                value: '',
                type: FieldTypes.SELECT,
                options: [],
              }],
          },
          {
            value: 'Project',
            type: FieldTypes.TEXT,
            rows: [{
              value: '',
              type: FieldTypes.INPUT,
            }],
          },
          {
            value: 'Project/Resource Manager',
            type: FieldTypes.TEXT,
            rows: [{
              value: '',
              type: FieldTypes.SELECT,
              options: [],
            }],
          },
          {
            value: 'Interviewer',
            type: FieldTypes.TEXT,
            rows: [{
              value: '',
              type: FieldTypes.INPUT,
            }],
          },
        ],
      },
  description: {
    value: ['Level', 'Description'],
    type: FieldTypes.CONTAINER,
    rows: [
      {
        value: '-',
        type: FieldTypes.TEXT,
        rows: [{
          value: '- опрос по этой теме во время интервью не производился',
          type: FieldTypes.TEXT,
        }],
      },
      {
        value: 'None',
        type: FieldTypes.TEXT,
        rows: [{
          value: '- нет знаний по теме',
          type: FieldTypes.TEXT,
        }],
      },
      {
        value: 'Novice',
        type: FieldTypes.TEXT,
        rows: [{
          // tslint:disable-next-line:max-line-length
          value: '- требуется понимание сути навыка, теоретичестие знания основных понятий и минимальное проявление в работе (Базовые неглубокие отрывочные знания хотябы по каким-то темам)',
          type: FieldTypes.TEXT,
        }],
      },
      {
        value: 'Intermediate',
        type: FieldTypes.TEXT,
        rows: [{
          // tslint:disable-next-line:max-line-length
          value: '- хорошие знания теории по большинству подтем из темы, представляет как это применять на практике и имеет опыт применения в работе (на субъективном уровне знает тему на уровне мидла)',
          type: FieldTypes.TEXT,
        }],
      },
      {
        value: 'Advanced',
        type: FieldTypes.TEXT,
        rows: [{
          // tslint:disable-next-line:max-line-length
          value: '- глубокие знания по большинству подтем, разбирается в тонкостях, понимает как это применять, и или применял на практике или без проблем сможет применить при неободимости (на субъективном уровне знает тему на уровне сеньера) ',
          type: FieldTypes.TEXT,
        }],
      },
    ],
  },
  hardSkills: {
    value: ['Software and Development Process', 'SKILLS', 'Self-assessment', 'CURRENT LEVEL', 'NEXT LEVEL', 'COMMENTS', 'Literature'],
    type: FieldTypes.CONTAINER,
    rows: [
      {
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
                rows: [...mainRow],
              },
              {
                value: 'Functional Programming',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'SOLID',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Design Patterns',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'DDD',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Event Sourcing',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Microservices architechure',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Architecture of highloaded applications',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
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
                rows: [...mainRow],
              },
              {
                value: 'Code Smells',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Refactoring',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Code Review Process&Experience',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
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
                rows: [...mainRow],
              },
              {
                value: 'Data Structures',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Basic fundamental algorithms',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Data Science',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Big Data',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Machine Learning&AI',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
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
                rows: [...mainRow],
              },
              {
                value: 'Build modes',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Pull/Merge requests validation',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'SonarQube',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Tests running',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Build files transfer',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Server build version update',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Notifications',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
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
                rows: [...mainRow],
              },
              {
                value: 'Integration Testing',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Automation Testing',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Perfomance Testing',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Security Testing',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Testing Frameworks',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Fakes',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Attributes, Assertions, FluentAssertions',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Gherkin',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'TDD',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'BDD',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Reports',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
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
                rows: [...mainRow],
              },
              {
                value: 'Logging process',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Profiling',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Profilers',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
            ],
          },
        ],
      },
      {
        value: 'Software Development Processes',
        type: FieldTypes.TEXT,
        width: FieldSize.MEDIUM,
        rows: [
          {
            value: 'Version Control System(Git,tfs...)',
            type: FieldTypes.TEXT,
            width: FieldSize.MEDIUM,
            rows: [
              {
                value: 'Base principles vcs.',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Git',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Gitflow',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'tfs,svn and etc',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'Estimations',
            type: FieldTypes.TEXT,
            width: FieldSize.MEDIUM,
            rows: [
              {
                value: 'Estimations experience',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Functionality points',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Story points',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Scrum pocker',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Gantt Chart&Project Planning',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'Development metodologies',
            type: FieldTypes.TEXT,
            width: FieldSize.MEDIUM,
            rows: [
              {
                value: 'Agile',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Scrum/Kanban Structure',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Processes Documentation',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Waterfall',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
            ],
          },
        ],
      },
      {
        value: 'Development',
        type: FieldTypes.TEXT,
        width: FieldSize.MEDIUM,
        rows: [
          {
            value: 'JS',
            type: FieldTypes.TEXT,
            width: FieldSize.MEDIUM,
            rows: [
              {
                value: 'JS Basic',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'JS Advance',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'JS Asynchronous programming',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Network interaction',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'JS Optimization',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'JS Design Patterns&Architecture',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'ES New features',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Client-side storages&Caching',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'Framework Knowledges / Angular',
            type: FieldTypes.TEXT,
            width: FieldSize.MEDIUM,
            rows: [
              {
                value: 'Framework Basic',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Framework Advance',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Framework Features',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Framework Routing',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Framework Testing',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'Optimization&Perfomance CheckList',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'HTML&CSS',
            type: FieldTypes.TEXT,
            width: FieldSize.MEDIUM,
            rows: [
              {
                value: 'HTML',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'CSS Basics',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
              {
                value: 'CSS Advance',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
                rows: [...mainRow],
              },
            ],
          },
        ],
      },
    ],
  },
  softSkills: {
    value: 'Soft Skills',
    type: FieldTypes.CONTAINER,
    rows: [
      {
        value: 'English Level',
        type: FieldTypes.TEXT,
        width: FieldSize.MEDIUM,
        rows: [...mainRow],
      },
      {
        value: 'Basic communication skills',
        type: FieldTypes.TEXT,
        width: FieldSize.MEDIUM,
        rows: [...mainRow],
      },
      {
        value: 'Presentation skills',
        type: FieldTypes.TEXT,
        width: FieldSize.MEDIUM,
        rows: [...mainRow],
      },
      {
        value: 'Continuous learning skills',
        type: FieldTypes.TEXT,
        width: FieldSize.MEDIUM,
        rows: [...mainRow],
      },
      {
        value: 'Team player',
        type: FieldTypes.TEXT,
        width: FieldSize.MEDIUM,
        rows: [...mainRow],
      },
      {
        value: 'Mentoring',
        type: FieldTypes.TEXT,
        width: FieldSize.MEDIUM,
        rows: [...mainRow],
      },
      {
        value: 'Leadership',
        type: FieldTypes.TEXT,
        width: FieldSize.MEDIUM,
        rows: [...mainRow],
      },

    ],
  },
  footer: {
    value: 'Assessment Result',
    type: FieldTypes.CONTAINER,
    rows: [
      {
        value: 'Feedback',
        type: FieldTypes.TEXT,
        rows: [
          {
            value: '',
            type: FieldTypes.INPUT,
          },
        ],
      },
      {
        value: 'Feedback(Eng)',
        type: FieldTypes.TEXT,
        rows: [
          {
            value: '',
            type: FieldTypes.INPUT,
          },
        ],
      },
      {
        value: 'After interview level',
        type: FieldTypes.TEXT,
        rows: [
          {
            value: '',
            type: FieldTypes.SELECT,
            options: ['J1', 'J2', 'J3', 'M1', 'M2', 'S', 'Ассесмент ранее не проводился', 'Trainee'],
          },
        ],
      },
    ],
  },
// tslint:disable-next-line:max-file-line-count
};
