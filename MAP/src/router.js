export const checkLocalStorage = () => {
  const iso2 = localStorage.getItem('iso2');
  const country = localStorage.getItem('country');
  console.log('Checking localStrorage');
  return iso2 && country;
};

export const getLocalStorage = () => {
  const iso2 = localStorage.getItem('iso2');
  const country = localStorage.getItem('country');

  return {
    iso2,
    country,
  };
};

export const setLocalStorage = (props) => {
  const { iso2, country, wikidata } = props;

  localStorage.setItem('iso2', iso2);
  localStorage.setItem('country', country);
  localStorage.setItem('wikidata', wikidata);
};

export const resetLocalStorage = (props) => {
  const iso2 = localStorage.getItem('iso2');
  const country = localStorage.getItem('country');

  if (iso2 && country) {
    localStorage.setItem('iso2', undefined);
    localStorage.setItem('country', undefined);
    localStorage.setItem('wikidata', undefined);
  }
};
