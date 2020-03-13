export class Data {
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
}
