import { Component, createRef } from 'react';
import { Translation } from 'react-i18next';
import './legend.css';
import { list } from '../../assets/icons/icons.js';
import AppContext from '../../contexts/AppContext';
import { UIComponent } from '../../utils/constant';
import { worldStyleColor } from '../Map/util';
export class Legend extends Component {
  static contextType = AppContext;
  constructor() {
    super();
    this.state = {
      showDialog: false,
    };
    this.btn = createRef();
    this.onClick = this.onClick.bind(this);
    // ? Add listeners
    this.initBtn = this.initBtn.bind(this);
    // ? Mobile
    this.onTouch = this.onTouch.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  initBtn(ref) {
    this.btn = ref;
    ref.addEventListener('touchmove', this.onTouch);
    ref.addEventListener('touchend', this.onTouchEnd);
  }

  // Mobile
  onTouch(e) {
    const touchLocation = e.targetTouches[0];
    this.btn.style.left = `${touchLocation.pageX}px`;
    this.btn.style.top = `${touchLocation.pageY}px`;
  }

  onTouchEnd() {
    let side = this.state.x;
    let vertical = this.state.y;
    const x = window.innerWidth || window.clientWidth;
    const y = window.innerHeight || window.clientHeight;
    const currentVertical = Number(this.btn.style.top.replace('px', ''));
    const currentSide = Number(this.btn.style.left.replace('px', ''));

    if (currentVertical > y / 2) {
      if (currentVertical >= y - 150) {
        this.btn.style.top = `${y - 150}px`;
      }
      vertical = 'bottom';
    } else {
      if (currentVertical <= 160) {
        this.btn.style.top = `${160}px`;
      }
      vertical = 'top';
    }
    if (currentSide > x / 2) {
      side = 'right';
      this.btn.style.left = `${x - 70}px`;
    } else {
      side = 'left';
      this.btn.style.left = '10px';
    }
    this.setState({
      x: side,
      y: vertical,
    });
  }

  onClick() {
    this.setState({
      showDialog: !this.state.showDialog,
    });
  }

  render() {
    const mode = this.props.dark ? 'dark' : '';
    const {environment} = this.context.environment;
    const {components} = environment['dsl'];
    const legend = components.find((component) => component.name === UIComponent.Legend);
    const {data} = legend;

    
    return (
      <legend
        onClick={this.onClick}
        type="legend"
        className={['btn', mode].join(' ')}
        {...this.props}
      >
        {list}
        <div
          className={`dialog ${this.state.showDialog ? 'show' : ''} ${
            this.props.y
          } ${this.props.x}`}
        >
          {
            data.map((legends, index) => (
              <div key={index}>
                <span>
                  <div className={`color ${worldStyleColor(legends.worldStyle)}`} />
                </span>
                <Translation>
                  {(t, { i18n }) => <span>{t(`${legends.title}`)}</span>}
                </Translation>
              </div>
            ))
          }
        </div>
      </legend>
    );
  }
}

Legend.defaultProps = {
  dark: false,
  // size: 'medium',
  x: 'left',
  y: 'bottom',
};
