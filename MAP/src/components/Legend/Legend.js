import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import './legend.css';
import { list } from '../../assets/icons/icons.js';

export class Legend extends Component {
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
    let touchLocation = e.targetTouches[0];
    this.btn.style.left = touchLocation.pageX + 'px';
    this.btn.style.top = touchLocation.pageY + 'px';
  }
  onTouchEnd(e) {
    let side = this.state.x;
    let vertical = this.state.y;
    let x = window.innerWidth || window.clientWidth;
    let y = window.innerHeight || window.clientHeight;
    let currentVertical = Number(this.btn.style.top.replace('px', ''));
    let currentSide = Number(this.btn.style.left.replace('px', ''));

    if (currentVertical > y / 2) {
      if (currentVertical >= y - 150) {
        this.btn.style.top = y - 150 + 'px';
      }
      vertical = 'bottom';
    } else {
      if (currentVertical <= 160) {
        this.btn.style.top = 160 + 'px';
      }
      vertical = 'top';
    }
    if (currentSide > x / 2) {
      side = 'right';
      this.btn.style.left = x - 70 + 'px';
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
          <div>
            <span>
              <div className="color green" />
            </span>
            <span> No Lockdown </span>
          </div>

          <div>
            <span>
              <div className="color orange" />
            </span>
            <span> Partial Lockdown </span>
          </div>

          <div>
            <span>
              <div className="color red" />
            </span>
            <span> Full Lockdown </span>
          </div>

          <div>
            <span>
              <div className="color gray" />
            </span>
            <span> No Data </span>
          </div>
        </div>
      </legend>
    );
  }
}

Legend.propTypes = {
  /**
   * Light mode or dark mode?
   */
  dark: PropTypes.bool,
  /**
   * How large should the button be?
   */
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Horizontal dialog position?
   */
  x: PropTypes.oneOf(['right', 'left']),
  /**
   * Vertical dialog position?
   */
  y: PropTypes.oneOf(['top', 'bottom']),
};

Legend.defaultProps = {
  dark: false,
  // size: 'medium',
  x: 'left',
  y: 'bottom',
};
