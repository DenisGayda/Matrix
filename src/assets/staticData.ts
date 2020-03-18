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
    teсhSkills: ISomeInterface;
    softSkills: ISomeInterface;
    footer: ISomeInterface;
}

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
            },
            {
                value: 'Functional Programming',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
            },
            {
                value: 'SOLID',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
            },
            {
                value: 'Design Patterns',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
            },
            {
                value: 'DDD',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
            },
            {
                value: 'Event Sourcing',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
            },
            {
                value: 'Microservices architechure',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
            },
            {
                value: 'Architecture of highloaded applications',
                type: FieldTypes.TEXT,
                width: FieldSize.MEDIUM,
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
                },
                {
                    value: 'Code Smells',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Refactoring',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Code Review Process&Experience',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
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
                },
                {
                    value: 'Data Structures',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Basic fundamental algorithms',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Data Science',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Big Data',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Machine Learning&AI',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
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
                },
                {
                    value: 'Build modes',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Pull/Merge requests validation',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'SonarQube',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Tests running',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Build files transfer',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Server build version update',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Notifications',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
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
                },
                {
                    value: 'Integration Testing',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Automation Testing',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Perfomance Testing',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Security Testing',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Testing Frameworks',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Fakes',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Attributes, Assertions, FluentAssertions',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Gherkin',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'TDD',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'BDD',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Reports',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
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
                },
                {
                    value: 'Logging process',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Profiling',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
                {
                    value: 'Profilers',
                    type: FieldTypes.TEXT,
                    width: FieldSize.MEDIUM,
                },
            ],
        },
        ],
};
