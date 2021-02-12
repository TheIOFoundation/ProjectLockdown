export default {
  translationBy: 'Marta Mangiarulo',
  languageId: 'it', // ? ISO 639-1:2002
  // ? For reference please see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes and for localized versions see https://en.wikipedia.org/wiki/Language_localisation
  header: {
    totals: {
      territoriesLockdown: 'TERRITORI IN LOCKDOWN',
      peopleAffected: 'POPOLAZIONE INTERESSATA',
      cases: 'CASI RIPORTATI',
      deaths: 'MORTI RIPORTATI',
    },
  },
  menu: {
    informationSection: {
      banner: 'Project Lockdown è attualmente in beta. Non tutti i dati potrebbero essere disponibili.',
      main: {
        name: 'Project Lockdown',
        text:
          '{Project Lockdown} fornisce una mappatura delle diverse NPI (Non-Pharmaceutical Interventions) applicate in tutto il mondo in risposta alla crisi COVID-19, al fine di visualizzare il successo delle diverse misure di risposta alla pandemia, monitorare gli effetti sui diritti umani e digitali e chiarire le metriche di valutazione.',
      },
      about: {
        title: 'About',
        text: {
          p1:
            'Sono state attuate misure di lockdown, quarantena e isolamento in tutto il mondo per ridurre la diffusione di COVID-19 e ridurre la pressione sulle infrastrutture mediche ',
          p2:
            '{Project Lockdown} consente ai cittadini, ai giornalisti e ai attori dei diritti umani di analizzare facilmente gli effetti sociali e politici di queste misure. Fondato sui valori della trasparenza e della responsabilità, ',
          p3:
            '{Project Lockdown} si impegna a fornire ai cittadini di tutto il mondo gli strumenti necessari per rimanere sicuri e informati.',
        },
      },
      sources: {
        title: 'Fonti',
        subtitle:
          '{Project Lockdown} combina più fonti affidabili per garantire che i dati utilizzati siano verificati e accurati. L`elenco completo delle fonti utilizzate si trova qui:',
        linksList: {
          first: {
            linkTitle: 'Database di Project Lockdown ',
            text: '(Raccolto da diverse fonti di NPI)',
          },
          second: {
            linkTitle: 'Coronavirus COVID19 API',
            text: '(Dati raccolti da',
            highlight: 'Johns Hopkins CSSE)',
          },
        },
        issues: {
          text: 'Se trovate degli errori, vi preghiamo di aiutarci e di segnalarli ',
          highlight: 'creando una segnalazione qui',
        },
      },
      credits: {
        title: 'Credits',
        text:
          '{Project Lockdown} è un’iniziativa di Civic Tech resa possibile da una serie di persone e ed organizzazioni motivate. Visualizza l’elenco dei collaboratori',
        highlight: 'qui',
      },
      dataPrivacity: {
        title: 'Dati & Privacy',
        paragraphs: {
          p1: 'Non raccogliamo informazioni personali dai nostri visitatori.',
          p2: 'Tutte le informazioni sui membri del progetto vengono fornite con il loro consenso.',
        },
      },
    },
    userPreferenceSection: {
      theme: {
        action: 'Attiva/disattiva ',
        dark: 'Modalità’ scura',
        light: 'Modalità’ chiara',
      },
      geolocation: 'Autorizza geolocalizzazione',
      app: {
        install: 'Installa l’app',
        update: 'Aggiorna l’app',
      },
    },
  },
  tdo: {
    tabs: {
      dailyLife: {
        name: 'Vita quotidiana',
        subtitle: 'Vita quotidiana',
        noResults: 'N/A',
        stats: {
          population: 'Popolazione',
          max_assembly: 'Massimo assembramento',
          max_assemblyShortVersion: 'Max. assembramento',
          cases: 'Casi',
          recoveries: 'Guarigioni',
          deaths: 'Morti',
        },
        measureValues: {
          1: 'TOTALE',
          2: 'PARZIALE',
          3: 'NESSUNO',
          4: 'NON CHIARO',
        },
        measures: {
          home: 'Uscire di casa',
          homeShortVersion: 'Uscire di casa',
          outdoors: 'Attivita’ all’aperto',
          outdoorsShortVersion: 'All’aperto',
          shopping: 'Fare la spesa',
          shoppingShortVersion: 'Fare la spesa',
          military: 'Nessun esercito aggiuntivo',
          militaryShortVersion: 'Non-dispiegamento',
          religious: 'Luoghi di culto',
          religiousShortVersion: 'Luoghi di culto',
          work: 'Andare al lavoro',
          workShortVersion: 'Andare al lavoro',
          schools: 'Seguire lezioni',
          schoolsShortVersion: 'Lezioni',
          electricity: 'Elettricita’ assicurata',
          electricityShortVersion: 'Elettricita’',
          water: 'Acqua assicurata',
          waterShortVersion: 'Acqua',
          internet: 'Internet assicurato',
          internetShortVersion: 'Internet',
        },
      },
      mobility: {
        name: 'Mobilita’',
        subtitle: 'Trasporti (restrizioni)',
        measureValues: {
          1: 'TOTALE',
          2: 'PARZIALE',
          3: 'NESSUNO',
          4: 'NON CHIARO',
        },
        measures: {
          foreignersInbound: 'Stranieri in entrata',
          foreignersInboundShortVersion: 'Stranieri (entrata)',
          foreignersOutbound: 'Stranieri in uscita',
          foreignersOutboundShortVersion: 'Stranieri (uscita)',
          local: 'tra citta’',
          localShortVersion: 'tra citta’',
          nationalsInbound: 'Cittadini in entrata',
          nationalsInboundShortVersion: 'Cittadini (entrata)',
          nationalsOutbound: 'Cittadini in uscita',
          nationalsOutboundShortVersion: 'Cittadini (uscita)',
          stopovers: 'Scali',
          stopoversShortVersion: 'Scali',
          crossBorderWorkers: 'Lavoratori transfrontalieri',
          crossBorderWorkersShortVersion: 'transfrontalieri',
          commerce: 'Commercio',
          commerceShortVersion: 'Commercio',
        },
      },
      reports: {
        name: 'Report',
        subtitle: 'Prossimamente',
      },
    },
  },
  mapLegend: {
    no: 'NESSUN LOCKDOWN',
    partial: 'LOCKDOWN PARZIALE',
    full: 'LOCKDOWN TOTALE',
    noData: 'NO DATI',
    cases: 'COVID (RIPORTATI)',
  },
};
