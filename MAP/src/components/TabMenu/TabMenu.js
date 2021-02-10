import { Component } from 'react';
import '../../style/main.css';
import './TabMenu.scss';
import { Expandable } from '../Expandable/Expandable';
import { Ticker } from '../Ticker/Ticker';
import { Settings } from '../Settings/Settings';
import { installMediaQueryWatcher } from '../../utils/media-query';
import Tabs from '../Tabs/Tabs';
import { burger, close as closeIcon } from '../../assets/icons/icons.js';

const renderMenu = (
  isDark,
  setDarkMode,
  menuItem,
  callback,
  currentDropdown,
  onDropDown,
  onLocateChange,
  locale = {
    t: s => {
      switch (s) {
        case 'menu.userPreferenceSection.theme.action':
          return 'Toggle ';
        case 'menu.userPreferenceSection.theme.light':
          return 'Light mode';
        case 'menu.userPreferenceSection.theme.dark':
          return 'Dark mode';
        default:
          return s;
      }
    },
  }
) => {
  switch (menuItem) {
    case 'info':
      return {
        title: 'info',
        template: (
          <>
            <h1>Project Lockdown</h1>
            <p className="ld-alpha">
              {locale.t('menu.informationSection.banner')}
            </p>
            <p>
              <b>{locale.t('menu.informationSection.main.name')}</b>
              {locale.t('menu.informationSection.main.text')}
            </p>

            <Expandable
              toggle={locale.t('menu.informationSection.about.title')}
              currentDropdown={currentDropdown}
              onDropDown={onDropDown}
              detail={
                <p>
                  {locale.t('menu.informationSection.about.text.p1')}
                  <b>{locale.t('menu.informationSection.main.name')}</b>
                  {locale.t('menu.informationSection.about.text.p2')}
                  <b>{locale.t('menu.informationSection.main.name')}</b>
                  {locale.t('menu.informationSection.about.text.p3')}
                </p>
              }
            />

            <Expandable
              toggle={locale.t('menu.informationSection.sources.title')}
              currentDropdown={currentDropdown}
              onDropDown={onDropDown}
              detail={
                <>
                  <p>
                    <b>{locale.t('menu.informationSection.main.name')}</b>
                    {locale.t('menu.informationSection.sources.subtitle')}
                  </p>
                  <ul className="ld-sources">
                    <li>
                      <a
                        className="ld-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://TIOF.Click/LockdownData"
                      >
                        {' '}
                        {locale.t(
                          'menu.informationSection.sources.linksList.first.linkTitle'
                        )}
                      </a>
                      <br />
                      {locale.t(
                        'menu.informationSection.sources.linksList.first.text'
                      )}
                    </li>
                    <li>
                      <a
                        className="ld-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://covid19api.com/"
                      >
                        {locale.t(
                          'menu.informationSection.sources.linksList.second.linkTitle'
                        )}
                      </a>
                      <br />
                      {locale.t(
                        'menu.informationSection.sources.linksList.second.text'
                      )}{' '}
                      <a
                        href="https://systems.jhu.edu/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {locale.t(
                          'menu.informationSection.sources.linksList.second.highlight'
                        )}
                      </a>
                      <br />
                    </li>
                  </ul>
                  <p>
                    {locale.t('menu.informationSection.sources.issues.text')}{' '}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/Code-for-All/lockdown/issues"
                    >
                      {locale.t(
                        'menu.informationSection.sources.issues.highlight'
                      )}
                    </a>
                    .
                  </p>
                  <div className="link-container">
                    <a
                      className="ld-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://tiof.click/LockdownData"
                    >
                      {locale.t(
                        `menu.contribution.contributionLinks.firstLink`
                      )}
                    </a>
                    <a
                      className="ld-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://tiof.click/pldpsf"
                    >
                      {locale.t(
                        `menu.contribution.contributionLinks.secondLink`
                      )}
                    </a>
                  </div>
                </>
              }
            />
            <Expandable
              toggle={locale.t('menu.informationSection.credits.title')}
              currentDropdown={currentDropdown}
              onDropDown={onDropDown}
              detail={
                <p>
                  <b>{locale.t('menu.informationSection.main.name')}</b>
                  {locale.t('menu.informationSection.credits.text')}
                  <a
                    href="https://docs.google.com/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit?ts=5e74ac83#gid=634415797"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {locale.t('menu.informationSection.credits.highlight')}
                  </a>
                  .
                </p>
              }
            />

            <Expandable
              toggle={locale.t('menu.informationSection.dataPrivacity.title')}
              currentDropdown={currentDropdown}
              onDropDown={onDropDown}
              detail={
                <>
                  <p>
                    {locale.t(
                      'menu.informationSection.dataPrivacity.paragraphs.p1'
                    )}
                  </p>
                  <p>
                    {locale.t(
                      'menu.informationSection.dataPrivacity.paragraphs.p2'
                    )}
                  </p>
                </>
              }
            />
          </>
        ),
      };
    case 'settings':
      return {
        title: 'settings',
        template: (
          <Settings
            darkMode={isDark}
            setDarkMode={setDarkMode}
            onClose={callback}
            onLocateChange={onLocateChange}
            locale={locale}
          />
        ),
      };
    case 'contribute':
      return {
        title: 'contribute',
        template: (
          <>
            <p>
              Do you have any NPI source you would want to share with us? Please
              follow this link:
            </p>
            <a
              className="ld-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"
            >
              Submit data
            </a>
            <p>
              Additionally, you can become part of the project by joining one of
              the following teams:
              <ul>
                <li>Editors</li>
                <li>Devs</li>
                <li>UI/UX</li>
              </ul>
            </p>
            <p>
              Contact us via Telegram at:
              <br />
              <a
                className="ld-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/ProjectLockdown"
              >
                {' '}
                @ProjectLockdown
              </a>
            </p>
          </>
        ),
      };

    case 'updates':
      return {
        title: 'updates',
        template: <Ticker />,
      };

    default:
      return {
        title: '',
        template: <></>,
      };
  }
};

export class TabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'info',
      showLateralMenu: false,
      showMenu: false,
      currentDropdown: 1,
    };
    this.showSideBar = this.showSideBar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.switchContent = this.switchContent.bind(this);
    this.onDropDown = this.onDropDown.bind(this);
  }
  
  componentDidMount() {
    let i = 0;

    installMediaQueryWatcher(`(min-width: 960px)`, matches => {
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
  
  showSideBar() {
    this.setState({
      showLateralMenu: true,
      showMenu: true,
    });
  }
  switchContent(val) {
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
  }

  closeNavbar() {
    this.setState({
      showLateralMenu: false,
      showSideBar: false,
      activeItem: 'info',
    });
  }

  onDropDown(id) {
    this.setState({
      currentDropdown: id,
    });
  }

  

  render() {
    const { activeItem, currentDropdown } = this.state;
    const {isDark, setDarkMode} = this.props;
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
              renderMenu(
                isDark,
                setDarkMode,
                activeItem,
                this.closeNavbar,
                currentDropdown,
                this.onDropDown,
                this.props.onLocateChange,
                this.props.locale
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
