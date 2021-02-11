export default {
  translationBy: 'Asma Qadah',
  languageId: 'ar', // ? ISO 639-1:2002
  // ? For reference please see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes and for localized versions see https://en.wikipedia.org/wiki/Language_localisation
  header: {
    version: 'النسخة التجريبية',
    totals: {
      territoriesLockdown: 'أقاليم تحت الحظر الكلي',
      peopleAffected: 'الأشخاص المتأثرين',
      cases: 'الحالات المسجلة',
      deaths: 'الوفيات المسجلة',
    },
  },
  menu: {
    informationSection: {
      banner: 'مشروع بروجكت لوكداون لايزال في نسخته التجريبية وقد لا تكون جمع المعلومات متاحة',
      main: {
        name: 'Project Lockdown',
        text:
          '{Project Lockdown} يوفر خريطة لمختلف التدابير الوقائية غير الطبية  المفروضة في جميع أنحاء العالم استجابة لأزمة كوفيد-19 لتصور نجاح مختلف تدابير الاستجابة للوباء، ومراقبة الآثار المترتبة على الإنسان والحقوق الرقمية، وتوضيح مقاييس التقييم.',
      },
      about: {
        title: 'عن',
        text: {
          p1:
            'تم تنفيذ إجراءات الحظر الكلي والحجر الصحي والعزل في جميع أنحاء العالم للحد من انتشار كوفيد-19 وتقليل الضغط على البنية التحتية الطبية.',
          p2:
            '{Project Lockdown} تمكين المواطنين والصحفيين والمدافعين عن حقوق الإنسان من تحليل الآثار الاجتماعية والسياسية المترتبة نتيجة هذه التدابير الوقائية بسهولة. تأسست على قيم الشفافية والمسئولية،',
          p3: '{Project Lockdown} وتلتزم بتزويد مواطني العالم بالأدوات اللازمة للبقاء في أمان وعلى علم بالمُجريات.',
        },
      },
      sources: {
        title: 'المصادر',
        subtitle:
          '{Project Lockdown} مجموعة متعددة من المصادر الموثوقة لضمان التحقق من صحة البيانات المستخدمة ودقتها. يمكنك العثور على القائمة الكاملة للمصادر المستخدمة هنا:',
        linksList: {
          first: {
            linkTitle: 'قاعدة بيانات بروجكت لوكداون',
            text: '(جُمعت من عدد من مصادر التدابير الوقائية غير الطبية)',
          },
          second: {
            linkTitle: 'واجهة برمجة تطبيقات فايروس كورونا كوفيد-19 ',
            text: '(مصدر البيانات من',
            highlight: 'Johns Hopkins CSSE)',
          },
        },
        issues: {
          text: 'يرجى مساعدتنا والتبليغ عن خلل أو أخطاء إن وُجدت',
          highlight: 'عبر إنشاء بلاغ هنا',
        },
      },
      credits: {
        title: 'الحقوق',
        text: '{Project Lockdown} هي مبادرة اجتماعية تقنية نفّذتها مجموعة من الأفراد والمنظمات المتفانية. اطلع على قائمة المساهمين',
        highlight: 'هنا',
      },
      dataPrivacity: {
        title: 'البيانات والخصوصية',
        paragraphs: {
          p1: '.لا نجمع أي معلومات شخصية من المتصفحين',
          p2: 'يتم عرض جميع المعلومات المتوفرة عن العاملين على المشروع بموافقتهم.',
        },
      },
    },
    userPreferenceSection: {
      theme: {
        action: ' التبديل',
        dark: 'الوضع المظلم',
        light: 'الوضع المضيء',
      },
      geolocation: 'السماح بتحديد الموقع الجغرافي',
      app: {
        install: 'تثبيت التطبيق',
        update: 'تحديث التطبيق',
      },
    },
  },
  tdo: {
    tabs: {
      dailyLife: {
        name: 'الحياة اليومية',
        subtitle: 'الحياة اليومية',
        noResults: 'لا ينطبق عليه',
        stats: {
          population: 'التعداد السكاني',
          max_assembly: 'أقصى عدد للتجمع',
          max_assemblyShortVersion: 'Max. assembly',
          cases: 'الحالات',
          recoveries: 'المتعافية',
          deaths: 'الوفيات',
        },
        measureValues: {
          1: 'كلّي',
          2: 'جزئي',
          3: 'لا يوجد',
          4: 'مبهم',
        },
        measures: {
          home: 'العزل المنزلي',
          homeShortVersion: 'Leave home',
          shopping: 'التسوق',
          shoppingShortVersion: 'Go shopping',
          outdoors: 'الأنشطة الخارجية',
          outdoorsShortVersion: 'Outdoors',
          military: 'الوجود العسكري',
          militaryShortVersion: 'Military (Not)',
          religious: 'الشعائر الدينية',
          religiousShortVersion: 'Religious sites',
          electricity: 'الكهرباء',
          electricityShortVersion: 'Electricity',
          work: 'الذهاب للعمل',
          workShortVersion: 'Go to work',
          water: 'الماء',
          waterShortVersion: 'Water',
          schools: 'الحضور المدرسي',
          schoolsShortVersion: 'Classes',
          internet: 'الاتصالات',
          internetShortVersion: 'Telecom',
        },
      },
      mobility: {
        name: 'إمكانية التنقل',
        subtitle: 'النقل (قيود)',
        measureValues: {
          1: 'كلّي',
          2: 'جزئي',
          3: 'لا يوجد',
          4: 'مبهم',
        },
        measures: {
          commerce: 'التجارة',
          commerceShortVersion: 'Commerce',
          foreignersInbound: 'غير المواطنين (دخول)',
          foreignersInboundShortVersion: 'Foreigners (in)',
          foreignersOutbound: 'غير المواطنين (خروج)',
          foreignersOutboundShortVersion: 'Foreigners (out)',
          local: 'بين المدن',
          localShortVersion: 'In between cities',
          nationalsInbound: 'المواطنين (دخول)',
          nationalsInboundShortVersion: 'Nationals (in)',
          nationalsOutbound: 'المواطنين (خروج)',
          nationalsOutboundShortVersion: 'Nationals (out)',
          stopovers: 'العبور',
          stopoversShortVersion: 'Stopovers',
          crossBorderWorkers: 'العاملين مابين الحدود',
          crossBorderWorkersShortVersion: 'Cross-border',
        },
      },
      reports: {
        name: 'التقارير',
        subtitle: 'قريباً',
      },
    },
  },
  mapLegend: {
    no: 'عدم وجود حظر كلي',
    partial: 'حظر جزئي',
    full: 'حظر كامل',
    noData: 'لايوجد بيانات',
    cases: 'كوفيد (مسجلة)',
  },
};
