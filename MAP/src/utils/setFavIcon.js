/**
 * @param {Boolean} darkmode
 */
export function setFavIcon(darkmode) {
  const [iconBig, iconSmall] = [...document.querySelectorAll("link[rel='icon']")];
  const manifest = document.querySelector("link[rel='manifest']");
  const theme_color = document.querySelector("meta[name='theme-color']");

  if (darkmode) {
    manifest.href = '/manifest-dark.json';
    iconBig.href = 'src/assets/favicon-32x32-dark.png';
    iconSmall.href = 'src/assets/favicon-16x16-dark.png';
    theme_color.setAttribute('content', '#303136');
  } else {
    manifest.href = '/manifest.json';
    iconBig.href = 'src/assets/favicon-32x32.png';
    iconSmall.href = 'src/assets/favicon-16x16.png';
    theme_color.setAttribute('content', '#ffffff');
  }

  document.getElementsByTagName('head')[0].appendChild(manifest);
  document.getElementsByTagName('head')[0].appendChild(iconBig);
  document.getElementsByTagName('head')[0].appendChild(iconSmall);
  document.getElementsByTagName('head')[0].appendChild(theme_color);
}
