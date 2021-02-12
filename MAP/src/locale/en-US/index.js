export default {
  translationBy: 'Project Lockdown team',
  languageId: 'en', // ? ISO 639-1:2002
  // ? For reference please see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes and for localized versions see https://en.wikipedia.org/wiki/Language_localisation
  header: {
    totals: {
      territoriesLockdown: 'TERRITORIES IN LOCKDOWN',
      peopleAffected: 'PEOPLE AFFECTED',
      cases: 'REPORTED CASES',
      deaths: 'REPORTED DEATHS',
    },
  },
  menu: {
    informationSection: {
      banner:
        'Disclaimer: Project Lockdown is a new platform and its components are currently being tested. Not all data may be available yet.',
      main: {
        name: 'Project Lockdown',
        text:
          '{Project Lockdown} provides a mapping of the different NPIs (Non-Pharmaceutical Interventions) enforced across the globe in response to the COVID-19 crisis, to visualize the success of different pandemic response measures, monitor effects on Human and Digital Rights, and clarify evaluation metrics.',
      },
      about: {
        title: 'About',
        text: {
          p1:
            'Lockdown, quarantine, and isolation measures have been implemented across the globe to reduce the spread of COVID-19 and reduce the strain on medical infrastructure. ',
          p2:
            '{Project Lockdown} empowers citizens, journalists, and human rights actors to easily analyze the social and political effects of these measures. Founded on the values of transparency and accountability, ',
          p3: '{Project Lockdown} is committed to providing citizens of the world with the tools they need to stay safe and informed.',
        },
      },
      sources: {
        title: 'Sources',
        subtitle:
          '{Project Lockdown} combines multiple trusted sources to ensure that the data used is verified and accurate. You can find the full list of sources used here:',
        linksList: {
          first: {
            linkTitle: "Project Lockdown's Database",
            text: '(Collected from a number of NPI sources)',
          },
          second: {
            linkTitle: 'Coronavirus COVID19 API',
            text: '(Data sourced from',
            highlight: 'Johns Hopkins CSSE)',
          },
        },
        issues: {
          text: 'If you find any errors, please help us and report it',
          highlight: 'by creating an issue here',
        },
      },
      credits: {
        title: 'Credits',
        text:
          '{Project Lockdown} is a Civic Tech initiative made possible by a number of dedicated individuals and organizations. View the list of contributors ',
        highlight: 'here',
      },
      dataPrivacity: {
        title: 'Data & Privacy',
        paragraphs: {
          p1: 'We do not collect any personal information from our visitors.',
          p2: 'All information on project members is provided with their consent.',
        },
      },
    },
    userPreferenceSection: {
      theme: {
        action: 'Toggle ',
        dark: 'Dark mode',
        light: 'Light mode',
      },
      geolocation: 'Allow geolocation',
      app: {
        install: 'Install app',
        update: 'Update app',
      },
    },
    contribution: {
      contributionLinks: {
        firstLink: 'Project dataset',
        secondLink: 'Contribute data',
        thirdLink: 'Propose corrections',
      },
    },
  },
  tdo: {
    contributionLinks: {
      firstLink: 'Territory dataset',
      secondLink: 'Contribute data',
      thirdLink: 'Propose corrections',
    },
    tabs: {
      dailyLife: {
        name: 'Daily Life',
        subtitle: 'Daily life (restrictions)',
        noResults: 'N/A',
        stats: {
          population: 'Population',
          max_assembly: 'Maximum assembly',
          max_assemblyShortVersion: 'Max. assembly',
          cases: 'Cases',
          recoveries: 'Recoveries',
          deaths: 'Deaths',
        },
        measureValues: {
          1: 'TOTAL',
          2: 'PARTIAL',
          3: 'NONE',
          4: 'UNCLEAR',
        },
        measures: {
          home: 'Leave home',
          homeShortVersion: 'Leave home',
          outdoors: 'Outdoor activities',
          outdoorsShortVersion: 'Outdoors',
          shopping: 'Go shopping',
          shoppingShortVersion: 'Go shopping',
          military: 'No military reinforcements',
          militaryShortVersion: 'Military (Not)',
          religious: 'Religious sites',
          religiousShortVersion: 'Religious sites',
          work: 'Go to work',
          workShortVersion: 'Go to work',
          schools: 'Attend classes',
          schoolsShortVersion: 'Classes',
          electricity: 'Electricity ensured',
          electricityShortVersion: 'Electricity',
          water: 'Water ensured',
          waterShortVersion: 'Water',
          internet: 'Telecom ensured',
          internetShortVersion: 'Telecom',
        },
      },
      mobility: {
        name: 'Mobility',
        subtitle: 'Transport restrictions',
        measureValues: {
          1: 'TOTAL',
          2: 'PARTIAL',
          3: 'NONE',
          4: 'UNCLEAR',
        },
        measures: {
          foreignersInbound: 'Foreigners inbound',
          foreignersInboundShortVersion: 'Foreigners (in)',
          foreignersOutbound: 'Foreigners outbound',
          foreignersOutboundShortVersion: 'Foreigners (out)',
          local: 'In between cities',
          localShortVersion: 'In between cities',
          nationalsInbound: 'Nationals inbound',
          nationalsInboundShortVersion: 'Nationals (in)',
          nationalsOutbound: 'Nationals outbound',
          nationalsOutboundShortVersion: 'Nationals (out)',
          stopovers: 'Stopovers',
          stopoversShortVersion: 'Stopovers',
          crossBorderWorkers: 'Cross-border workers',
          crossBorderWorkersShortVersion: 'Cross-border',
          commerce: 'Commerce',
          commerceShortVersion: 'Commerce',
        },
      },
      reports: {
        name: 'Reports',
        subtitle: 'Coming Soon',
      },
    },
  },
  mapLegend: {
    no: 'NO LOCKDOWN',
    partial: 'PARTIAL LOCKDOWN',
    full: 'FULL LOCKDOWN',
    noData: 'NO DATA',
    cases: 'COVID (REPORTED)',
  },
};
