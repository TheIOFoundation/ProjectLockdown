import { Component } from 'react';
import '../../style/main.css';
import './TabMenu.scss';
import { installMediaQueryWatcher } from '../../utils/media-query';
import Tabs from '../Tabs/Tabs';
import { burger, close as closeIcon } from '../../assets/icons/icons.js';
import Menu from './Menu';
export class TabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'info',
      showLateralMenu: false,
      showMenu: false,
      currentDropdown: 1,
    };
  }

  componentDidMount() {
    let i = 0;

    installMediaQueryWatcher(`(min-width: 960px)`, (matches) => {
      this.setState({
        isMobile: !matches,
      });
      if (matches && i > 0) {
        // This is super ugly, but this fires on pageload and causes the focus to be set on the menu :/
        i++;
        this.props.close();
      }
    });
  }

  showSideBar = () => {
    this.setState({
      showLateralMenu: true,
      showMenu: true,
    });
  };
  switchContent = (val) => {
    if (val === 'settings' && this.state.updateAvailable) {
      this.setState({
        updateAvailable: false,
      });
    }

    if (this.state.isMobile && this.props.opened && val === this.prevVal) {
      this.props.close();
      this.setState({
        activeItem: this.prevVal,
      });
      this.prevVal = '';
      return;
    }

    // this.props.changeRoute(renderMenu(val));

    this.prevVal = val;
    this.setState({
      activeItem: val,
      showLateralMenu: val === this.state.activeItem ? false : true,
    });
  };

  closeNavbar = () => {
    this.setState({
      showLateralMenu: false,
      showSideBar: false,
      activeItem: 'info',
    });
  };

  onDropDown = (id) => {
    this.setState({
      currentDropdown: id,
    });
  };

  render() {
    const { activeItem, currentDropdown } = this.state;
    const { isDark, setDarkMode } = this.props;
    return this.state.showLateralMenu || this.props.isMobile === true ? (
      <>
        <div className="menu-overlay"></div>
        <main id="main" className="ld-menu">
          <div className="ld-menu-nav">
            <button className="menu-close-btn" onClick={this.closeNavbar}>
              {closeIcon}
            </button>
            <nav>
              <Tabs
                onClose={this.closeNavbar}
                switchContent={this.switchContent}
              >
                <button id="info">info</button>
                <button id="settings">settings</button>
                <button id="updates">updates</button>
                <button id="contribute">contribute</button>
              </Tabs>
            </nav>
          </div>
          <div className={this.state.showLateralMenu ? 'ld-menu--content' : ''}>
            <div className="mb-only">
              <div className="ld-menu--header">
                <h1>{activeItem}</h1>
              </div>
            </div>
            {
              Menu(
                isDark,
                setDarkMode,
                activeItem,
                this.closeNavbar,
                currentDropdown,
                this.onDropDown,
                this.props.onLocateChange,
                this.props.locale,
              ).template
            }
          </div>
        </main>
      </>
    ) : (
      <button onClick={this.showSideBar} className="menu-side-btn">
        {burger}
      </button>
    );
  }
}
