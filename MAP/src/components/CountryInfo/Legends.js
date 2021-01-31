import React from "react";

const Legends = () => {
  let { i18n, tab } = _;
  return (
    <div class="legend ld-font-legend">
      <dl>
        <div class="legend-item">
          <dt class="legend-green" aria-label="green"></dt>…{" "}
          <div class="legend-item">
            <dt class="legend-gray" aria-label="gray"></dt>
            <dd>{i18n.t(`tdo.tabs.${tab}.measureValues.4`)}</dd>
          </div>
        </div>
      </dl>
    </div>
  );
};

export default Legends;
