export default {
  translationBy: 'Mark W. Datysgeld',
  languageId: 'pt-BR', // ? ISO 639-1:2002
  // ? For reference please see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes and for localized versions see https://en.wikipedia.org/wiki/Language_localisation
  header: {
    totals: {
      territoriesLockdown: 'TERRITÓRIOS EM LOCKDOWN',
      peopleAffected: 'PESSOAS AFETADAS',
      cases: 'CASOS REPORTADOS',
      deaths: 'MORTES REPORTADAS',
    },
  },
  menu: {
    informationSection: {
      banner: 'O Project Lockdown está atualmente em versão Beta. Nem todos os dados estão disponíveis no momento.',
      main: {
        name: 'Project Lockdown',
        text:
          '{Project Lockdown} fornece o mapeamento de diferentes NPIs (Intervenções Não Farmacêuticas) aplicadas por todo o mundo em resposta à crise da COVID-19, com o objetivo de visualizar o sucesso de diferentes medidas de resposta à pandemia, monitorar efeitos nos Direitos Humanos e Digitas, e clarificar métricas de avaliação.',
      },
      about: {
        title: 'Sobre',
        text: {
          p1:
            'Lockdowns, quarentenas, e medidas de isolamento foram implementadas pelo globo para reduzir o avanço da COVID-19 e reduzir seu peso na infraestrutura médica. ',
          p2:
            '{Project Lockdown} empodera cidadãos, jornalistas, e atores de direitos humanos para que possam facilmente analisar os efeitos sociais e políticos dessas medidas. Com fundamento em valores de transparência e accountability, ',
          p3:
            '{Project Lockdown} é comprometido a prover os cidadãos do mundo com as ferramentas que precisam para se manterem seguros e informados.',
        },
      },
      sources: {
        title: 'Fontes',
        subtitle:
          '{Project Lockdown} combina mútliplas fontes confiáveis para garantir que os dados utilizados são verificáveis e corretos. Você pode checar nossa lista de fontes aqui:',
        linksList: {
          first: {
            linkTitle: 'Banco de dados do Project Lockdown',
            text: '(Coletados de várias fontes de NPIs)',
          },
          second: {
            linkTitle: 'Coronavirus COVID19 API',
            text: '(Dados originários de',
            highlight: 'Johns Hopkins CSSE)',
          },
        },
        issues: {
          text: 'Se encontrar algum erro, por favor nos ajude e reporte',
          highlight: 'criando uma Contestação aqui',
        },
      },
      credits: {
        title: 'Créditos',
        text:
          '{Project Lockdown} é uma iniciativa de Civic Tech tornada possível por uma série de indivíduos e organizações comprometidas com sua causa. Veja a lista de contribuidores',
        highlight: 'aqui',
      },
      dataPrivacity: {
        title: 'Dados & Privacidade',
        paragraphs: {
          p1: 'Não coletamos nenhum dado pessoal de nossos visitantes.',
          p2: 'Qualquer informação sobre membros do projeto é provida mediante consentimento prévio.',
        },
      },
    },
    userPreferenceSection: {
      theme: {
        action: 'Trocar ',
        dark: 'Modo escuro',
        light: 'Modo claro',
      },
      geolocation: 'Permitir geolocalização',
      app: {
        install: 'Instalar aplicativo',
        update: 'Atualizar aplicativo',
      },
    },
  },
  tdo: {
    tabs: {
      dailyLife: {
        name: 'Vida Diária',
        subtitle: 'Vida diária (restrições)',
        noResults: 'N/D',
        stats: {
          population: 'População',
          max_assembly: 'Congregação máxima',
          max_assemblyShortVersion: 'Congr. máxima',
          cases: 'Casos',
          recoveries: 'Recuperações',
          deaths: 'Mortes',
        },
        measureValues: {
          1: 'TOTAL',
          2: 'PARCIAL',
          3: 'NENHUMA',
          4: 'NÃO ESTÁ CLARO',
        },
        measures: {
          home: 'Sair de casa',
          homeShortVersion: 'Sair de casa',
          outdoors: 'Atividades externas',
          outdoorsShortVersion: 'Passear',
          shopping: 'Fazer compras',
          shoppingShortVersion: 'Fazer compras',
          military: 'Sem reforços militares',
          militaryShortVersion: 'Militarares (Não)',
          religious: 'Locais religiosos',
          religiousShortVersion: 'Locais religiosos',
          work: 'Ir ao trabalho',
          workShortVersion: 'Ir ao trabalho',
          schools: 'Ir para aulas',
          schoolsShortVersion: 'Ir para aulas',
          electricity: 'Electricidade garantida',
          electricityShortVersion: 'Electricidade',
          water: 'Água garantida',
          waterShortVersion: 'Água',
          internet: 'Telecomunicações garantidas',
          internetShortVersion: 'Telecomunicações',
        },
      },
      mobility: {
        name: 'Mobilidade',
        subtitle: 'Restrições de transporte',
        measureValues: {
          1: 'TOTAL',
          2: 'PARCIAL',
          3: 'NENHUMA',
          4: 'NÃO ESTÁ CLARO',
        },
        measures: {
          foreignersInbound: 'Estrangeiros entrando',
          foreignersInboundShortVersion: 'Estrangeiros entram',
          foreignersOutbound: 'Estrangeiros saindo',
          foreignersOutboundShortVersion: 'Estrangeiros saem',
          local: 'Entre cidades',
          localShortVersion: 'Entre cidades',
          nationalsInbound: 'Nacionais entrando',
          nationalsInboundShortVersion: 'Nacionais entram',
          nationalsOutbound: 'Nacionais saindo',
          nationalsOutboundShortVersion: 'Nacionais saem',
          stopovers: 'Conexões',
          stopoversShortVersion: 'Conexões',
          crossBorderWorkers: 'Trabalhadores transfronteiriços',
          crossBorderWorkersShortVersion: 'Trabalho na fronteira',
          commerce: 'Comércio',
          commerceShortVersion: 'Comércio',
        },
      },
      reports: {
        name: 'Relatórios',
        subtitle: 'Em Breve',
      },
    },
  },
  mapLegend: {
    no: 'SEM LOCKDOWN',
    partial: 'LOCKDOWN PARCIAL',
    full: 'LOCKDOWN TOTAL',
    noData: 'SEM DADOS',
    cases: 'COVID (REPORTADO)',
  },
};
