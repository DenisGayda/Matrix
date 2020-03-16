export class Data {
  static get skillsData(): (string | {} | [])[][] {
    return this._skillsData;
  }

  static levelDescription = [
    {column1: '-', column2: '- опрос по этой теме во время интервью не производился'},
    {column1: 'None', column2: '- нет знаний по теме'},
    {
      column1: 'Novice', column2: '- требуется понимание сути навыка, теоретические знания основных понятий и минимальное проявление в работе (Базовые' +
        ' неглубокие отрывочные знания хотябы по каким-то темам)',
    },
    {
      column1: 'Intermediate', column2: '- хорошие знания теории по большинству подтем из темы, представляет как это применять на практике и имеет опыт' +
        ' применения в работе (на субъективном уровне знает тему на уровне мидла)',
    },
    {
      column1: 'Advanced', column2: '- глубокие знания по большинству подтем, разбирается в тонкостях, понимает как это применять, и или применял на практике' +
        ' или без проблем сможет применить при неободимости (на субъективном уровне знает тему на уровне сеньера) ',
    },
  ];

  static levelDescriptionHeader = [ 'Level', 'Description'];

  static softwareAndDevelopmentProcessHeader = ['Software and Development Process', 'SKILLS', 'Self-assessment',
    'CURRENT LEVEL', 'NEXT LEVEL', 'COMMENTS', 'Literature'];

  static sofAndDevProcColumn = ['Software Engineering Practices',
    'Software Development Processes'];

  private static _skillsData = [['Architecture knowledge', {}, [], [], [],
    'не знает групп паттернов и вообще плохо в них ориентируется, не знает какую проблему решает dependency inversion',
  '"""""""Erich Gamma,' +
  'Richard Helm""""        Design Patterns: Elements of Reusable Object-Oriented Software"""'],
    ['Code Standards&Code Review Process', {}, [], [], [], '', 'Р. Мартин Чистый код. Создание, анализ и рефакторинг'],
    ['Algorithms and data structures', {}, [], [], [], '', 'Алгоритмы. Построение и анализ. Томас Х. Кормен, Чарльз И. Лейзерсон, Рональд Л. Ривест,' +
    ' Клиффорд Штайн' +
    'Introduction to Algorithms by Thomas H. Corman' +
    'Algorithm for Interviews' +
    'https://www.coursera.org/specializations/data-structures-algorithms' +
    'Глубокое обучение. Погружение в мир нейронных сетей' +
    'Глубокое обучение. Ян Гудфеллоу, Аарон Курвилль, Иошуа Бенджио. Сергей Николенко, А. Кадурин, Екатерина Архангельская'],
    ['Continuous Integration&Continuous Delivery & Deployment', {}, [], [], [], '', 'Continuous delivery. Практика непрерывных апдейтов' +
    'https://www.piter.com/product_by_id/87629352'],
    ['Testing', {}, [], [], [], '', 'Кент Бек Экстремальное программирование. Разработка через тестирование (Библиотека программиста)' +
    'Tomek Kaczanowski        Practical Unit Testing with JUnit and Mockito(2013)'],
    ['Troubleshooting/Logging/Monitoring', {}, [], [], [], '', ''],
    ['Version Control System(Git,tfs...)', {}, [], [], [], '', 'Gitflow: https://nvie.com/posts/a-successful-git-branching-model/' +
    'Git Internals. Scott Chacon. https://github.com/pluralsight/git-internals-pdf/raw/master/drafts/peepcode-git.pdf'],
    ['Estimations', {}, [], [], [], '', 'Essential Scrum: A Practical Guide to the Most Popular Agile Process. Kenneth S. Rubin'],
    ['Development metodologies', {}, [], [], [], '', 'Постигая Agile «Путь скрам-мастера» З.Шохова'],
  ];
}
