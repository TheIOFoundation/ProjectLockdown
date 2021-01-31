import React from "react";

const Reports = () => {
  let { i18n } = _;
  return (
    <div class="${reports}">
      <h3>{i18n.t(`tdo.tabs.reports.subtitle`)}</h3>
      <div class="placeholder"></div>
    </div>
  );
};

export default Reports;
