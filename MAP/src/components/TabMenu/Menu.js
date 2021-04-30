import { Translation } from 'react-i18next';
import { Ticker } from '../Ticker/Ticker';
import { Expandable } from '../Expandable/Expandable';
import { Settings } from '../Settings/Settings';
import '../../style/main.css';
import './TabMenu.scss';
const Menu = (
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
            <Translation>
  { (t, { 
    i18n
   }) => 
              <>
              <h1>Project Lockdown</h1>
              <p className="ld-alpha">
                {t('menu.informationSection.banner')}
              </p>
              <p>
                <b>{t('menu.informationSection.main.name')}</b>
                {t('menu.informationSection.main.text')}
              </p>
  
              <Expandable
                toggle={t('menu.informationSection.about.title')}
                currentDropdown={currentDropdown}
                onDropDown={onDropDown}
                detail={
                  <p>
                    {t('menu.informationSection.about.text.p1')}
                    <b>{t('menu.informationSection.main.name')}</b>
                    {t('menu.informationSection.about.text.p2')}
                    <b>{t('menu.informationSection.main.name')}</b>
                    {t('menu.informationSection.about.text.p3')}
                  </p>
                }
              />
  
              <Expandable
                toggle={t('menu.informationSection.sources.title')}
                currentDropdown={currentDropdown}
                onDropDown={onDropDown}
                detail={
                  <>
                    <p>
                      <b>{t('menu.informationSection.main.name')}</b>
                      {t('menu.informationSection.sources.subtitle')}
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
                          {t(
                            'menu.informationSection.sources.linksList.first.linkTitle'
                          )}
                        </a>
                        <br />
                        {t(
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
                          {t(
                            'menu.informationSection.sources.linksList.second.linkTitle'
                          )}
                        </a>
                        <br />
                        {t(
                          'menu.informationSection.sources.linksList.second.text'
                        )}{' '}
                        <a
                          href="https://systems.jhu.edu/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {t(
                            'menu.informationSection.sources.linksList.second.highlight'
                          )}
                        </a>
                        <br />
                      </li>
                    </ul>
                    <p>
          {t('menu.informationSection.sources.issues.text')}{' '}
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/Code-for-All/lockdown/issues"
                      >
                        {t(
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
                        {t(
                          `menu.contribution.contributionLinks.firstLink`
                        )}
                      </a>
                      <a
                        className="ld-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://tiof.click/pldpsf"
                      >
                        {t(
                          `menu.contribution.contributionLinks.secondLink`
                        )}
                      </a>
                    </div>
                  </>
                }
              />
              <Expandable
                toggle={t('menu.informationSection.credits.title')}
                currentDropdown={currentDropdown}
                onDropDown={onDropDown}
                detail={
                  <p>
                    <b>{t('menu.informationSection.main.name')}</b>
                    {t('menu.informationSection.credits.text')}
                    <a
                      href="https://docs.google.com/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit?ts=5e74ac83#gid=634415797"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('menu.informationSection.credits.highlight')}
                    </a>
                    .
                  </p>
                }
              />
  
              <Expandable
                toggle={t('menu.informationSection.dataPrivacity.title')}
                currentDropdown={currentDropdown}
                onDropDown={onDropDown}
                detail={
                  <>
                    <p>
                      {t(
                        'menu.informationSection.dataPrivacity.paragraphs.p1'
                      )}
                    </p>
                    <p>
                      {t(
                        'menu.informationSection.dataPrivacity.paragraphs.p2'
                      )}
                    </p>
                  </>
                }
              />
              </>
              }
              </Translation>
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
  
  export default Menu;