export default {
  translationBy: 'DotAsia Foundation (Jennifer Chung)',
  languageId: 'zh-CN', // ? ISO 639-1:2002
  // ? For reference please see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes and for localized versions see https://en.wikipedia.org/wiki/Language_localisation
  header: {
    totals: {
      territoriesLockdown: '封锁区',
      peopleAffected: '受影响人数',
      cases: '确诊个案',
      deaths: '死亡个案',
    },
  },
  menu: {
    informationSection: {
      banner: '试行阶段，资料如有遗漏，敬请包涵。',
      main: {
        name: 'Project Lockdown',
        text:
          '{Project Lockdown} 提供针对新冠病毒（COVID-19）全球各地非药物干预措施（NPI）的实施地图，以展示应对措施的成效，以及造成的监控对人权和数字权利的影响，并评估衡量指标。',
      },
      about: {
        title: '关于我们',
        text: {
          p1: '全球各地均已实施了封锁和隔离措施，以减少新冠病毒的传播并减轻对医疗系统造成的压力。 ',
          p2: '{Project Lockdown} 为公民、记者和人权监察者，减轻分析这些措施对社会和政治造成的影响。基于透明度和问责制的价值观 ',
          p3: '{Project Lockdown} 致力为公民世界提供保持安全和知情所需的工具。',
        },
      },
      sources: {
        title: '资料来源',
        subtitle: '揉合多个可靠来源，确保所使用的数据均具认证及准确。详情请参考资料来源列表:',
        linksList: {
          first: {
            linkTitle: '抗疫封锁监察数据库',
            text: '(来自不同非药物干预措施（NPI）资料来源)',
          },
          second: {
            linkTitle: '新冠病毒API',
            text: '数据来源',
            highlight: '约翰霍普金斯大学（Johns Hopkins CSSE）',
          },
        },
        issues: {
          text: '若发现任何错漏，欢迎协助及指正',
          highlight: '报告',
        },
      },
      credits: {
        title: '鸣谢',
        text: '是由不同志愿者和组织共同实现的公民科技计划。查看参与者',
        highlight: '列表',
      },
      dataPrivacity: {
        title: '数据与私隐',
        paragraphs: {
          p1: '本网站不会从访问者收集任何个人资料。',
          p2: '所有有项目成员资料均获得同意后才展示。',
        },
      },
    },
    userPreferenceSection: {
      theme: {
        action: '切换 ',
        dark: '深色',
        light: '浅色',
      },
      geolocation: '允许地理位置',
      app: {
        install: '安装应用程式',
        update: '更新应用程式',
      },
    },
  },
  tdo: {
    tabs: {
      dailyLife: {
        name: '日常生活',
        subtitle: '日常生活',
        noResults: '没有提供',
        stats: {
          population: '人口',
          max_assembly: '聚众人限',
          max_assemblyShortVersion: '聚众人限',
          cases: '个案',
          recoveries: '复原',
          deaths: '死亡',
        },
        measureValues: {
          1: '全面',
          2: '部份',
          3: '没有',
          4: '不详',
        },
        measures: {
          home: '离家',
          homeShortVersion: '离家',
          outdoors: '户外活动',
          outdoorsShortVersion: '户外活动',
          shopping: '购物',
          shoppingShortVersion: '购物',
          military: '没有加强军事部署',
          militaryShortVersion: '没有加强军事部署',
          religious: '宗教场所',
          religiousShortVersion: '宗教场所',
          work: '上班',
          workShortVersion: '上班',
          schools: '上学',
          schoolsShortVersion: '上学',
          electricity: '电力供应',
          electricityShortVersion: '电力',
          water: '水',
          waterShortVersion: '水',
          internet: '电讯',
          internetShortVersion: '电讯',
        },
      },
      mobility: {
        name: '流动能力',
        subtitle: '交通（限制）',
        measureValues: {
          1: '全面',
          2: '部份',
          3: '没有',
          4: '不详',
        },
        measures: {
          foreignersInbound: '外籍人士（入境）',
          foreignersInboundShortVersion: '外籍人士（入境）',
          foreignersOutbound: '外籍人士（出境）',
          foreignersOutboundShortVersion: '外籍人士（出境）',
          local: '境内跨区域流动',
          localShortVersion: '境内跨区域流动',
          nationalsInbound: '当地人民（入境）',
          nationalsInboundShortVersion: '当地人民（入境）',
          nationalsOutbound: '当地人民（出境）',
          nationalsOutboundShortVersion: '当地人民（出境）',
          stopovers: '跨境/转机',
          stopoversShortVersion: '跨境/转机',
          crossBorderWorkers: '跨境工作者',
          crossBorderWorkersShortVersion: '跨境工作者',
          commerce: '商业货运',
          commerceShortVersion: '商业货运',
        },
      },
      reports: {
        name: '报告',
        subtitle: '稍后',
      },
    },
  },
  mapLegend: {
    no: '没有封锁',
    partial: '部份封锁',
    full: '全面封锁',
    noData: '没有资料提供',
    cases: '新冠病毒（确诊个案）',
  },
};
