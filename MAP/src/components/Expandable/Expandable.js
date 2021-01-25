import { useState, useRef, useEffect } from 'react';
import './Expandable.scss';

export function Expandable(props) {
  const [expanded, setExpanded] = useState(false);
  const detail = useRef(null);

  useEffect(() => {
    if (expanded) {
      detail.current.focus({ preventScroll: true });
    }
  }, [expanded]);

  useEffect(() => {
    if (props.currentDropdown !== props.toggle) {
      setExpanded(false);
    }
  }, [props.currentDropdown, props.toggle]);

  return (
    <div className="ld-expandable">
      <button
        onClick={() => {
          props.onDropDown(expanded ? false : props.toggle);
          setExpanded(!expanded);
        }}
        className="ld-expandable--toggle"
        aria-expanded={expanded}
      >
        <div className="ld-expandable--icon">
          {expanded ? chevronDown : chevronRight}
        </div>
        <div className="ld-expandable--toggle-content">
          <h2>{props.toggle}</h2>
        </div>
      </button>

      <div
        ref={detail}
        className={`ld-expandable--detail ${
          expanded ? 'ld-expandable--expanded' : 'ld-expandable--closed'
        }`}
        role="region"
        tabIndex="-1"
      >
        {props.detail}
      </div>
    </div>
  );
}

const chevronRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-chevron-right"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const chevronDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-chevron-down"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
