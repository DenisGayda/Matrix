import { FieldTypes } from './FieldTypes';
import { fieldTypeFinalTitles } from './fieldTypeFinalTitles';
import { ITableInterface } from './ITableInterface';
import { fieldTypeEnglishTitles } from './fieldTypeEnglishTitles';
import { mainRow } from './mainRow';

export const table: ITableInterface = {
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
          value: '- требуется понимание сути навыка,' +
            ' теоретичестие знания основных понятий и минимальное проявление в работе' +
            ' (Базовые неглубокие отрывочные знания хотябы по каким-то темам)',
          type: FieldTypes.TEXT,
        }],
      },
      {
        value: 'Intermediate',
        type: FieldTypes.TEXT,
        rows: [{
          value: '- хорошие знания теории по большинству подтем из темы,' +
            ' представляет как это применять на практике и имеет опыт применения в работе' +
            ' (на субъективном уровне знает тему на уровне мидла)',
          type: FieldTypes.TEXT,
        }],
      },
      {
        value: 'Advanced',
        type: FieldTypes.TEXT,
        rows: [{
          value: '- глубокие знания по большинству подтем, разбирается в тонкостях,' +
            ' понимает как это применять, и или применял на практике или без проблем сможет применить при неободимости' +
            ' (на субъективном уровне знает тему на уровне сеньера) ',
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
        rows: [
          {
            value: 'Architecture knowledge',
            type: FieldTypes.TEXT,
            rows: [
              {
                value: 'OOP',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Functional Programming',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'SOLID',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Design Patterns',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'DDD',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Event Sourcing',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Microservices architechure',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Architecture of highloaded applications',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'Code Standards&Code Review Process',
            type: FieldTypes.TEXT,
            rows: [
              {
                value: 'Code Standards',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Code Smells',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Refactoring',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Code Review Process&Experience',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'Algorithms and data structures',
            type: FieldTypes.TEXT,
            rows: [
              {
                value: 'Big-O Notation for Algorithm Complexity',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Data Structures',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Basic fundamental algorithms',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Data Science',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Big Data',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Machine Learning&AI',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'Continuous Integration&Continuous Delivery & Deployment',
            type: FieldTypes.TEXT,
            rows: [
              {
                value: 'TFS, TeamCity, Jenkins',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Build modes',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Pull/Merge requests validation',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'SonarQube',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Tests running',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Build files transfer',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Server build version update',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Notifications',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'Testing',
            type: FieldTypes.TEXT,
            rows: [
              {
                value: 'Unit Testing',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Integration Testing',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Automation Testing',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Perfomance Testing',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Security Testing',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Testing Frameworks',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Fakes',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Attributes, Assertions, FluentAssertions',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Gherkin',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'TDD',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'BDD',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Reports',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'Troubleshooting/Logging/Monitoring',
            type: FieldTypes.TEXT,
            rows: [
              {
                value: 'Debugging',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Logging process',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Profiling',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Profilers',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
            ],
          },
        ],
      },
      {
        value: 'Software Development Processes',
        type: FieldTypes.TEXT,
        rows: [
          {
            value: 'Version Control System(Git,tfs...)',
            type: FieldTypes.TEXT,
            rows: [
              {
                value: 'Base principles vcs.',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Git',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Gitflow',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'tfs,svn and etc',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'Estimations',
            type: FieldTypes.TEXT,
            rows: [
              {
                value: 'Estimations experience',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Functionality points',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Story points',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Scrum pocker',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Gantt Chart&Project Planning',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'Development metodologies',
            type: FieldTypes.TEXT,
            rows: [
              {
                value: 'Agile',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Scrum/Kanban Structure',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Processes Documentation',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Waterfall',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
            ],
          },
        ],
      },
      {
        value: 'Development',
        type: FieldTypes.TEXT,
        rows: [
          {
            value: 'JS',
            type: FieldTypes.TEXT,
            rows: [
              {
                value: 'JS Basic',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'JS Advance',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'JS Asynchronous programming',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Network interaction',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'JS Optimization',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'JS Design Patterns&Architecture',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'ES New features',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Client-side storages&Caching',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'Framework Knowledges / Angular',
            type: FieldTypes.TEXT,
            rows: [
              {
                value: 'Framework Basic',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Framework Advance',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Framework Features',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Framework Routing',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Framework Testing',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'Optimization&Perfomance CheckList',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
            ],
          },
          {
            value: 'HTML&CSS',
            type: FieldTypes.TEXT,
            rows: [
              {
                value: 'HTML',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'CSS Basics',
                type: FieldTypes.TEXT,
                rows: [...mainRow],
              },
              {
                value: 'CSS Advance',
                type: FieldTypes.TEXT,
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
        rows: [
          {
            value: 'Self-assessment',
            type: FieldTypes.SELECT,
            options: Object.values(fieldTypeEnglishTitles),
          },
          {
            value: 'CURRENT LEVEL',
            type: FieldTypes.SELECT,
            options: Object.values(fieldTypeEnglishTitles),
          },
          {
            value: 'NEXT LEVEL',
            type: FieldTypes.SELECT,
            options: Object.values(fieldTypeEnglishTitles),
          },
          {
            value: 'COMMENTS',
            type: FieldTypes.INPUT,
          },
          {
            value: 'Literature',
            type: FieldTypes.TEXT,
          },
        ],
      },
      {
        value: 'Basic communication skills',
        type: FieldTypes.TEXT,
        rows: [...mainRow],
      },
      {
        value: 'Presentation skills',
        type: FieldTypes.TEXT,
        rows: [...mainRow],
      },
      {
        value: 'Continuous learning skills',
        type: FieldTypes.TEXT,
        rows: [...mainRow],
      },
      {
        value: 'Team player',
        type: FieldTypes.TEXT,
        rows: [...mainRow],
      },
      {
        value: 'Mentoring',
        type: FieldTypes.TEXT,
        rows: [...mainRow],
      },
      {
        value: 'Leadership',
        type: FieldTypes.TEXT,
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
            options: Object.values(fieldTypeFinalTitles),
          },
        ],
      },
    ],
  },
};
