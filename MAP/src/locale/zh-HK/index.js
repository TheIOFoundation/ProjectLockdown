export default {
  translationBy: 'DotAsia Foundation (Jennifer Chung)',
  languageId: 'zh-HK', // ? ISO 639-1:2002
  // ? For reference please see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes and for localized versions see https://en.wikipedia.org/wiki/Language_localisation
  header: {
    totals: {
      territoriesLockdown: '封鎖區',
      peopleAffected: '受影響人數',
      cases: '確診個案',
      deaths: '死亡個案',
    },
  },
  menu: {
    informationSection: {
      banner: '試行階段，資料錯漏，敬請包涵。',
      main: {
        name: 'Project Lockdown',
        text:
          '{Project Lockdown} 提供針對新冠病毒（COVID-19）全球各地非藥物干預措施（NPI）的實施地圖，以展示應對措施的成效，以及造成的監控對人權和數字權利的影響，並評估衡量指標。',
      },
      about: {
        title: '關於我們',
        text: {
          p1: '全球各地均已實施了封鎖和隔離措施，以減少新冠病毒的傳播並減輕對醫療系統造成的壓力。 ',
          p2: '{Project Lockdown} 為公民、記者和人權監察者，減輕分析這些措施對社會和政治造成的影響。基於透明度和問責制的價值觀 ',
          p3: '{Project Lockdown} 致力為公民世界提供保持安全和知情所需的工具。',
        },
      },
      sources: {
        title: '資料來源',
        subtitle: '{Project Lockdown} 揉合多個來源，以確保所數據準確。請參考資料來源列表：',
        linksList: {
          first: {
            linkTitle: '抗疫封鎖監察數據庫',
            text: '〔來自不同非藥物干預措施（NPI）資料來源〕',
          },
          second: {
            linkTitle: '新冠病毒API',
            text: '數據來源',
            highlight: '約翰霍普金斯大學（Johns Hopkins CSSE）',
          },
        },
        issues: {
          text: '若發現任何錯漏，請提供',
          highlight: '報告',
        },
      },
      credits: {
        title: '鳴謝',
        text: '是由不同志願者和組織共同實現的公民科技計劃。查看參與者',
        highlight: '列表',
      },
      dataPrivacity: {
        title: '數據與私隱',
        paragraphs: {
          p1: '本網站不會從訪問者收集任何個人資料。',
          p2: '所有有項目成員資料均獲得同意後才展示。',
        },
      },
    },
    userPreferenceSection: {
      theme: {
        action: '切換 ',
        dark: '深色',
        light: '淺色',
      },
      geolocation: '允許地理位置',
      app: {
        install: '安裝應用程式',
        update: '更新應用程式',
      },
    },
  },
  tdo: {
    tabs: {
      dailyLife: {
        name: '日常生活',
        subtitle: '日常生活',
        noResults: '沒有提供',
        stats: {
          population: '人口',
          max_assembly: '聚眾人限',
          max_assemblyShortVersion: '聚眾人限',
          cases: '個案',
          recoveries: '復原',
          deaths: '死亡',
        },
        measureValues: {
          1: '全面',
          2: '部份',
          3: '沒有',
          4: '不詳',
        },
        measures: {
          home: '離家',
          homeShortVersion: '離家',
          outdoors: '戶外活動',
          outdoorsShortVersion: '戶外活動',
          shopping: '購物',
          shoppingShortVersion: '購物',
          military: '沒有加強軍事部署',
          militaryShortVersion: '沒有加強軍事部署',
          religious: '宗教場所',
          religiousShortVersion: '宗教場所',
          work: '上班',
          workShortVersion: '上班',
          schools: '上學',
          schoolsShortVersion: '上學',
          electricity: '電力供應',
          electricityShortVersion: '電力',
          water: '水',
          waterShortVersion: '水',
          internetShortVersion: '電訊',
          internetShortVersion: '電訊',
        },
      },
      mobility: {
        name: '流動能力',
        subtitle: '交通（限制）',
        measureValues: {
          1: '全面',
          2: '部份',
          3: '沒有',
          4: '不詳',
        },
        measures: {
          foreignersInbound: '外籍人士（入境）',
          foreignersInboundShortVersion: '外籍人士（入境）',
          foreignersOutbound: '外籍人士（出境）',
          foreignersOutboundShortVersion: '外籍人士（出境）',
          local: '境內跨區域流動',
          localShortVersion: '境內跨區域流動',
          nationalsInbound: '當地人民（入境）',
          nationalsInboundShortVersion: '當地人民（入境）',
          nationalsOutbound: '當地人民（出境)',
          nationalsOutboundShortVersion: '當地人民（出境)',
          stopovers: '跨境/轉機',
          stopoversShortVersion: '跨境/轉機',
          crossBorderWorkers: '跨境工作者',
          crossBorderWorkersShortVersion: '跨境工作者',
          commerce: '商業貨運',
          commerceShortVersion: '商業貨運',
        },
      },
      reports: {
        name: '報告',
        subtitle: '稍後',
      },
    },
  },
  mapLegend: {
    no: '沒有封鎖',
    partial: '部份封鎖',
    full: '全面封鎖',
    noData: '沒有資料提供',
    cases: '新冠病毒（確診個案）',
  },
};
