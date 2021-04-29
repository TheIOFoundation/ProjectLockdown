import {
    home,
    citymovement,
    religion,
    work,
    military,
    academia,
    shops,
    electricity,
    water,
    internet,
  } from '../../assets/icons/icons.js'
export  const MEASURES = [
    {
      id: 'lockdown_status',
      label: 'Stay Home',
      translationKey: 'home',
      icon: home,
      value: 'PARTIAL',
    },
    {
      id: 'going_to_shops',
      label: 'Shopping',
      translationKey: 'shopping',
      icon: shops,
      value: 'PARTIAL',
    },
    {
      id: 'city_movement_restriction',
      label: 'Outdoors',
      translationKey: 'outdoors',
      icon: citymovement,
      value: 'PARTIAL',
    },
    {
      id: 'military_not_deployed',
      label: 'Military',
      translationKey: 'military',
      icon: military,
      value: 'UNCLEAR',
    },
    {
      id: 'attending_religious_sites',
      label: 'Religious Sites',
      translationKey: 'religious',
      icon: religion,
      value: 'UNCLEAR',
    },
    {
      id: 'electricity_nominal',
      label: 'Electricity',
      translationKey: 'electricity',
      icon: electricity,
      value: 'UNCLEAR',
    },
    {
      id: 'going_to_work',
      label: 'Go to Work',
      translationKey: 'work',
      icon: work,
      value: 'PARTIAL',
    },
    {
      id: 'water_nominal',
      label: 'Water ensured',
      translationKey: 'water',
      icon: water,
      value: 'UNCLEAR',
    },
    {
      id: 'academia_allowed',
      label: 'Go to Schools',
      translationKey: 'schools',
      icon: academia,
      value: 'YES',
    },
    {
      id: 'internet_nominal',
      label: 'Telecom ensured',
      translationKey: 'internet',
      icon: internet,
      value: 'UNCLEAR',
    },
  ];
  export const TRANSLATIONS = {
    commerce: {
      id: 'commerce',
      text: 'Commerce',
    },
    foreigners_inbound: {
      id: 'foreignersInbound',
      text: 'Foreigners Inbound',
    },
    foreigners_outbound: {
      id: 'foreignersOutbound',
      text: 'Foreigners Outbound',
    },
    local: {
      id: 'local',
      text: 'Local',
    },
    nationals_inbound: {
      id: 'nationalsInbound',
      text: 'Nationals Inbound',
    },
    nationals_outbound: {
      id: 'nationalsOutbound',
      text: 'Nationals Outbound',
    },
    stopovers: {
      id: 'stopovers',
      text: 'Stopovers',
    },
    cross_border_workers: {
      id: 'crossBorderWorkers',
      text: 'Cross-border Workers',
    },
  }
export const TRAVEL = {
    1: 'YES',
    2: 'PARTIALLY',
    3: 'NO',
    4: 'UNCLEAR',
    5: 'NA',
  }
export const TRAVELTYPE = ['Land', 'Flight', 'Sea'];
export const tabs = [
  {
    id: 1,
    name: 'Daily Life',
  },
  {
    id: 2,
    name: 'Mobility',
  },
  {
    id: 3,
    name: 'Reports',
  },
];