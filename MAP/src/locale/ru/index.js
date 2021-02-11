export default {
  translationBy: 'Svetlana Zens',
  languageId: 'ru', // ? ISO 639-1:2002
  // ? For reference please see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes and for localized versions see https://en.wikipedia.org/wiki/Language_localisation
  header: {
    totals: {
      territoriesLockdown: 'ТЕРРИТОРИИ ПОД ИЗОЛЯЦИЕЙ ',
      peopleAffected: 'ПОСТРАДАВШИЕ ЛЮДИ',
      cases: 'ЗАРЕГИСТРИРОВАННЫЕ СЛУЧАИ',
      deaths: 'СМЕРТНОСТЬ',
    },
  },
  menu: {
    informationSection: {
      banner: 'Проект Lockdown в настоящее время находится в бета-версии. Не все данные могут быть доступны.',
      main: {
        name: 'Project Lockdown',
        text:
          '{Project Lockdown} обеспечивает сопоставление различных НФВ (не фармацевтических вмешательств), применяемых в борьбе против COVID-19 во всем мире, а также для визуализации успеха различных мер реагирования на пандемию, мониторинга воздействия на права человека и цифровые права, и уточнения показателей оценки.',
      },
      about: {
        title: 'О проекте ',
        text: {
          p1:
            'Во всем мире были приняты меры по локализации, карантину и изоляции, чтобы уменьшить распространение COVID-19 и снизить нагрузку на медицинский сектор. ',
          p2:
            '{Project Lockdown} Проект дает гражданам, журналистам и правозащитникам возможность легко анализировать социальные и политические последствия принятых мер. Проект основан на прозрачности и ответственности, ',
          p3:
            '{Project Lockdown} стремится предоставить гражданам мира инструменты необходимые для обеспечения безопасности и информированности.',
        },
      },
      sources: {
        title: 'Источники',
        subtitle:
          '{Project Lockdown} для достоверности и точности данных ресурс  объединяет несколько надежных источников.Вы можете найти полный список использованных источников здесь :',
        linksList: {
          first: {
            linkTitle: 'База данных проекта Lockdown',
            text: '(Собрано из ряда HB источников )',
          },
          second: {
            linkTitle: 'Coronavirus COVID19 API',
            text: '(Данные  из ',
            highlight: 'Джонс Хопкинс CSSE)',
          },
        },
        issues: {
          text: 'Если вы обнаружите какие-либо ошибки, пожалуйста, помогите нам и сообщите об этом',
          highlight: 'Сообщите тут ',
        },
      },
      credits: {
        title: 'Указатели ',
        text:
          '{Project Lockdown} Инициатива Civic Tech стала возможной благодаря целому ряду преданных людей и организаций. Посмотреть список участников',
        highlight: 'тут',
      },
      dataPrivacity: {
        title: 'Данные и Конфиденциальность ',
        paragraphs: {
          p1: 'Мы не собираем конфиденциальную  информацию о наших посетителях.',
          p2: 'Вся информация об участниках проекта предоставляется с их согласия.',
        },
      },
    },
    userPreferenceSection: {
      theme: {
        action: 'Тумблер ',
        dark: 'Темный режим',
        light: 'Светлый режим ',
      },
      geolocation: 'Разрешить геолокацию',
      app: {
        install: 'Установить приложение ',
        update: 'Обновить приложение ',
      },
    },
  },
  tdo: {
    tabs: {
      dailyLife: {
        name: 'Повседневная жизнь',
        subtitle: 'Повседневная жизнь',
        noResults: 'N/A',
        stats: {
          population: 'Население ',
          max_assembly: 'Макс сбор ',
          cases: 'Случаи ',
          recoveries: 'Выздоровевшие ',
          deaths: 'Смерти',
        },
        measureValues: {
          1: 'Всего',
          2: 'ЧАСТИЧНО',
          3: 'НЕТ',
          4: 'НЕЯСНО',
        },
        measures: {
          home: 'Оставайся дома',
          homeShortVersion: 'Leave home',
          shopping: 'Идти за покупками',
          shoppingShortVersion: 'Go shopping',
          outdoors: 'Выходить на улицу',
          outdoorsShortVersion: 'Outdoors',
          military: 'Военное присутствие',
          militaryShortVersion: 'Military (Not)',
          religious: 'Религиозная служба',
          religiousShortVersion: 'Religious sites',
          electricity: 'Электричество',
          electricityShortVersion: 'Electricity',
          work: 'Иди на работу',
          workShortVersion: 'Go to work',
          water: 'Вода',
          waterShortVersion: 'Water',
          schools: 'Посещать занятия',
          schoolsShortVersion: 'Classes',
          internet: 'Телеком',
          internetShortVersion: 'Telecom',
        },
      },
      mobility: {
        name: 'Мобильность',
        subtitle: 'Транспорт (ограничения)',
        measureValues: {
          1: 'Всего',
          2: 'ЧАСТИЧНО',
          3: 'НЕТ',
          4: 'НЕЯСНО',
        },
        measures: {
          commerce: 'Торговля',
          commerceShortVersion: 'Commerce',
          foreignersInbound: 'Въезд для иностранцев',
          foreignersInboundShortVersion: 'Foreigners (in)',
          foreignersOutbound: 'Выезд для иностранцев',
          foreignersOutboundShortVersion: 'Foreigners (out)',
          local: 'Транспорт между городами',
          localShortVersion: 'In between cities',
          nationalsInbound: 'Въезд для граждан ',
          nationalsInboundShortVersion: 'Nationals (in)',
          nationalsOutbound: 'Выезд для граждан',
          nationalsOutboundShortVersion: 'Nationals (out)',
          stopovers: 'Остановка',
          stopoversShortVersion: 'Stopovers',
          crossBorderWorkers: 'Трансграничные работники',
          crossBorderWorkersShortVersion: 'Cross-border',
        },
      },
      reports: {
        name: 'Отчёты ',
        subtitle: 'Скоро ',
      },
    },
  },
  mapLegend: {
    no: 'Нет Изоляции ',
    partial: 'Частичная Изоляция',
    full: ' Полная Изоляция',
    noData: 'Нет Данных ',
    cases: 'COVID-19 (Объявлено)',
  },
};
