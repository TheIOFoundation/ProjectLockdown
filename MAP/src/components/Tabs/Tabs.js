import { Component } from 'react';
import { info, settings, refresh, add } from '../../assets/icons/icons.js';
import { addPwaUpdateListener } from '../../utils/addPwaUpdateListener.js';
import { installMediaQueryWatcher } from '../../utils/media-query.js';
import { dialogService } from '../../services/dialogService.js';
import '../../style/main.css';

const ICONS = {
  info,
  settings,
  updates: refresh,
  contribute: add,
};
const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;

export default class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      updateAvailable: false,
      index: 0,
    };

    this.tabRefs = {};

    this.__onFocusMove = this.__onFocusMove.bind(this);
    this.__onTabClick = this.__onTabClick.bind(this);
  }

  componentDidMount() {
    installMediaQueryWatcher(`(min-width: 960px)`, matches => {
      this.setState({ isMobile: !matches });
    });

    dialogService.addEventListener('close', e => {
      if (e.detail.menuDialogClosed) {
        this.tabRefs[`tab${this.state.index}`].focus();
      }
    });

    addPwaUpdateListener(updateAvailable => {
      this.setState({
        updateAvailable,
      });
    });
  }

  updateIndex(i, type) {
    if (type === 'settings' && this.state.updateAvailable) {
      this.setState({
        updateAvailable: false,
      });
    }

    this.setState({ index: i });
    this.tabRefs[`tab${i}`].focus();
    if (!this.state.isMobile) {
      this.commit(type);
    }
  }

  __onTabClick(i, type) {
    this.updateIndex(i, type);
    this.commit(type);
  }

  commit(type) {
    this.props.switchContent(type.toLowerCase());
  }

  __onFocusMove(e) {
    const currIndex = this.state.index;

    switch (e.keyCode) {
      case KEYCODE_LEFT:
        if (currIndex !== 0) {
          this.updateIndex(
            currIndex - 1,
            this.tabRefs[`tab${currIndex - 1}`]
              .getAttribute('data-label')
              .toLowerCase()
          );
        }
        break;
      case KEYCODE_RIGHT:
        if (currIndex !== this.props.children.length - 1) {
          this.updateIndex(
            currIndex + 1,
            this.tabRefs[`tab${currIndex + 1}`]
              .getAttribute('data-label')
              .toLowerCase()
          );
        }
        break;
    }
  }

  render() {
    const { index } = this.state;
    return (
      <ul className="ld-menu--tabs" role="tablist">
        {this.props.children.map((child, i) => {
          return (
            <li role="presentation" key={i} className={i > 1 ? 'hide' : ''}>
              <button
                role="tab"
                ref={ref => (this.tabRefs['tab' + i] = ref)}
                tabIndex={index === i ? '0' : '-1'}
                aria-selected={index === i ? 'true' : 'false'}
                className={index === i ? 'ld-menu--active' : ''}
                data-label={child.props.id}
                onKeyUp={this.__onFocusMove}
                onClick={() => this.__onTabClick(i, child.props.id)}
              >
                {child.props.id === 'settings' && this.state.updateAvailable ? (
                  <div className="ld-menu--notification"></div>
                ) : (
                  ''
                )}
                {ICONS[child.props.id]}
                <p className={index === i ? 'ld-menu--active' : ''}>
                  {child.props.id.toUpperCase()}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
