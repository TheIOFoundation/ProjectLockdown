export const checkLocalStorage = () => {
  const iso2 = localStorage.getItem("iso2");
  const country = localStorage.getItem("country");
  console.log("Checking localStrorage");
  if(iso2 && country) {
    return true;
  }
  else {
    return false;
  }
}


export const getLocalStorage = () => {
  const iso2 = localStorage.getItem("iso2");
  const country = localStorage.getItem("country");

  return {
    iso2,
    country
  }
}

export const setLocalStorage = (props) => {

  const  { iso2 , country, wikidata } = props;

  localStorage.setItem("iso2", iso2);
  localStorage.setItem("country", country);
  localStorage.setItem("wikidata", wikidata);
}

export const resetLocalStorage = (props) => {
  const iso2 = localStorage.getItem("iso2");
  const country = localStorage.getItem("country");

  if(iso2 && country) {
    localStorage.setItem("iso2", undefined);
    localStorage.setItem("country", undefined);
    localStorage.setItem("wikidata", undefined);
  }
}

// import { EventTargetShim } from './utils/EventTargetShim.js';

// class Router extends EventTargetShim {
//   constructor() {
//     super();

//     window.addEventListener('click', this.__onClick.bind(this), true);
//     window.addEventListener('popstate', this.__onPathChanged.bind(this));
//     this.url = new URL(location);
//   }

//   setPath(path) {
//     window.history.pushState(null, '', path);
//     this.__onPathChanged();
//   }

//   setSearchParam(key, value) {
//     const params = new URLSearchParams(location.search);
//     if (value) {
//       params.set(key, value);
//     } else {
//       params.delete(key);
//     }
//     const paramsString = params.toString();

//     this.setPath(`${location.pathname}${paramsString ? `?${paramsString}` : ''}`);
//   }

//   __onPathChanged() {
//     this.url = new URL(location);
//     this.dispatchEvent(new Event('path-changed'));

//     /**
//      * Checks if a new service worker is available on SPA navigations
//      * Otherwise if a user has their tab open indefinitely, they wont get updates
//      */
//     if ('serviceWorker' in navigator) {
//       navigator.serviceWorker.getRegistration().then((registration) => {
//         if (registration) {
//           registration.update();
//         }
//       });
//     }
//   }

//   __onClick(e) {
//     if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) {
//       return;
//     }

//     const a = e.composedPath().find((el) => el.tagName === 'A');

//     if (!a || !a.href) return;
//     if (a.hasAttribute('download') || a.href.includes('mailto:')) return;
//     const target = a.getAttribute('target');
//     if (target && target !== '' && target !== '_self') return;

//     const url = new URL(a.href);

//     if (url.hash) {
//       return;
//     }

//     if (!url.href.startsWith(document.baseURI)) {
//       // navigate outside app
//       return;
//     }
//     // navigate within app
//     e.preventDefault();
//     this.setPath(url.pathname);
//   }
// }

// export const router = new Router();
