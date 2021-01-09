import { html } from 'htm/preact';

// ? When the sidebar is hide
export const menuRight = html`
  <svg width="46" height="107" viewBox="0 0 46 107" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <path
        d="M48 99V0L18.0997 11.176C14.745 12.43 11.7528 14.4949 9.39021 17.1866C5.91586 21.1449 4 26.2318 4 31.4987V69.4519C4 72.4131 4.74691 75.3265 6.17162 77.9224C8.13247 81.4953 11.2721 84.2772 15.0551 85.7936L48 99Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter id="filter0_d" x="0" y="0" width="52" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
`;

// ? When the sidebar is visible
export const menuLeft = html`
  <svg width="64" height="104" viewBox="0 0 64 104" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <path
        d="M4 96V0L43.7854 11.3302C46.9295 12.2256 49.8387 13.8004 52.3075 15.9433C57.1936 20.1847 60 26.3368 60 32.8071V66.1812C60 69.785 58.8666 73.2976 56.7603 76.2217C54.565 79.2694 51.4314 81.5136 47.8392 82.6107L4 96Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter id="filter0_d" x="0" y="0" width="64" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
`;
