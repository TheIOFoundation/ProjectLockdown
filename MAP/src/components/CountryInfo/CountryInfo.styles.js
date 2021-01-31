import css from 'csz';

export const tabStyles = css`
  &{
    width: 100%;
    display: flex;
    position: relative;
    & > button{
      & {
        position: absolute !important;
        color: var(--ld-gray-3);
        background-color: transparent;
        padding: 0px !important;
        top: 10px;
        width: 30px !important;
        height: 30px !important;
        right: 5px;
        border: 0px;
        border-radius: 50% !important;
        &:hover {
          cursor: pointer;
        }
        
      }
      .dark & {
        position: absolute !important;
        color: gray;
        background-color: transparent;
        padding: 0px;
        top: 10px;
        width: 30px;
        right: 5px;
        border-radius: 50%;
        &:hover {
          cursor: pointer;
        }
      }
    }
    & .tab{
      width: 35%;
      background-color: var(--ld-gray-6);
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      padding: 5px;
      color: var(--ld-gray-3);
      border: gray 1px solid;
      border-top: 0px;
      transition: 0.5s;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      min-height: 50px;
      letter-spacing:.5px;
      .dark & {
        background-color: var(--ld-gray-2);
        color: gray;
        border: var(--ld-gray-3) 1px solid;
      }
      &:hover{
        cursor: pointer;
      }
      &.active{
        border-bottom: 0px;
        background-color: #FFF 
        border: 0px;
        color: var(--ld-gray-1);
        .dark &{
          background-color: var(--ld-bg);
          color: white;
        }
      }
      &:first-child{
        border-top-left-radius: 19px;
      }
      &:last-child{
        border-top-right-radius: 19px;
      }
      &:nth-child(3){
        border-top-right-radius: 19px;
        padding-right: 35px;
      }
      &:nth-child(2){
        width: 30%;
      }
    }
  }
`;
export const reports = css`
  & {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    & > h3 {
      background-color: rgba(231, 231, 231, 0.227);
      padding: 0.5rem 0.4rem;
      border-radius: 7px;
    }
    & .placeholder {
      @media (max-width: 350px) {
        background: url('https://github.com/Code-for-All/lockdown/blob/master/src/assets/images/pld-report-sm.png?raw=true') no-repeat;
        background-size: contain;
        background-position: center;
      }
      @media (max-width: 960px) {
        background: url('https://github.com/Code-for-All/lockdown/blob/master/src/assets/images/pld-report-med.png?raw=true') no-repeat;
        background-size: contain;
        background-position: center;
      }
      background: url('https://github.com/Code-for-All/lockdown/blob/master/src/assets/images/pld-report-lrg.png?raw=true');
      height: 100%;
      width: 100%;
      position: absolute;
      background-size: cover;
      opacity: 0.3;
      z-index: -1;
    }
  }
`;
export const countryInfoStyles = css`
  .countryInfo.loader {
    background-color: white !important;
    .dark & {
      background-color: var(--ld-bg) !important;
    }
  }
  & {
    // background-color: var(--ld-bg);
    background-color: white !important;

    color: var(--ld-text);
    padding: 20px 30px 30px 30px;
      @media (max-width: 960px) {
        padding: 5px 15px 15px 15px !important;
      }
    // width: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      padding-left: 1.5%;
      padding-right: 1.5%;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 7px;
      border: 4px solid white;
    }
    & .link-container{
      display: flex;
      justify-content: space-between;
      padding: 25px 0px;
    }
    & .ld-font-subheader {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.02em;
      & span:first-child {
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.05em;
        padding-right: 7px;
      }
    }
  }
  .countryInfo dl {
    margin-top: -27px;
  }
  dl {
    margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  h1 {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-bottom: 8px;
  }
  h2 {
    margin-top: 10px;
    padding-bottom: 5px;
    border-bottom: 7px;
    margin-bottom: 2px;
    &.last {
      padding: 0px;
      padding-top: 8px;
      border-top: 1px solid #e0e0e0;
      border-bottom: 0px;
      margin-top:7px;
      .dark &{
        border-top: 1px solid #e0e0e0;
      }
      &.transport {
        margin-bottom: -20px;
      }
    }
  }
  .data {
    display: flex;
    flex-wrap: wrap;
  }
  .data-entry {
    font-variant-numeric: tabular-nums;
    margin-bottom: 7px;
    padding-bottom: 7px;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    .dark &{
      border-bottom:1px solid #e0e0e0;
    }
    &.is-half {
      width: 50%;
    }
    &.is-third {
      width: 33.33%;
    }
  }
  .data-entry dt {
    text-align:left;
    font-size: 12px;
    font-weight: 400;
  }
  .data dd {
    margin-left: 0;
    font-size: 12px;
    text-align: left;
    font-weight: 600;
  }
  .legend dl {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .legend-item {
    display: flex;
  }
  .legend-item dt {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .legend-item dd {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.02em;
    margin-inline-start: 0;
    margin-right: 8px;
    .dark & {
      color: var(--ld-text);
    }
  }
  .legend-green {
    background-color: #93c47d;
  }
  .legend-yellow {
    background-color: #f6b26b;
  }
  .legend-red {
    background-color: red;
  }
  .legend-gray {
    background-color: gray;
  }
  .measures {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    padding: 5px 0 0 3%;
    margin: 0 0px 0;
  }
  .measures > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 0px;
    text-align: left;
    overflow-x: hidden;
  }
  .measure-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .measure svg {
    width: 22px;
    height: 22px;
  }
  .measure-label {
    padding: 6px;
    border-radius: 20px;
    color: var(--ld-gray-1);
    pointer-events: none;
    transition: opacity 300ms ease-in-out;
    font-size: 12px;
    font-weight:400;
    .dark & {
      color: var(--ld-text);
    }
  }
  .measure {
    margin-right:10px;
      @media (max-width: 960px) {
        margin-right:10px;
      }
  }
  .measure:hover ~ .measure-label {
    opacity: 1;
  }
  .measure-YES {
    fill: #93c47d;
  }
  .measure-PARTIAL {
    fill: #f6b26b;
  }
  .measure-NO {
    fill: red;
  }
  .measure-UNCLEAR {
    fill: gray;
  }
  .ld-travel {
    display: flex;
    text-align:left;
    margin-bottom: 10px;
  }
  .ld-travel dt {
    flex-basis: 62%;
    flex-shrink: 0;
    font-weight: 300;
    margin-right: 20px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    .dark & {
      color: var(--ld-text);
    }
  }
  .ld-travel dd {
    margin-left: 0;
  }
  .ld-travel--val-icon {
    fill: var(--ld-text);
  }
  .ld-travel--val-YES {
    background-color: #93c47d;
  }
  .ld-travel--val-PARTIALLY {
    background-color: #f6b26b;
  }
  .ld-travel--val-NO {
    background-color: red;
  }
  .ld-travel--val-UNCLEAR {
    background-color: gray;
  }
  .ld-travel--val-NA {
    /* TODO: What to color NA? */
    background-color: gray;
  }
  .sr-only {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
  .ld-travel--values {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }
  .ld-travel--symbol {
    position: relative;
    text-align: center;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  /* .ld-travel--symbol::after {
    position: absolute;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    content: attr(data-tooltip);
  }
  .ld-travel--symbol:hover::after {
    opacity: 1;
  } */
`;