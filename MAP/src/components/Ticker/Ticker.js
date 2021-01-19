import { useState, useEffect } from 'react';
import { updatesService } from '../../services/updatesService.js';
import { offline, loading } from '../../assets/icons/icons.js';
import '../../style/shared.styles.scss';

const UPDATE_TYPES = {
  new_entry: 'new entry',
  announcement: 'announcement',
  rectification: 'rectification',
  promoting_project: 'project promotion',
  promoting_petition: 'petition',
};

export function Ticker() {
  const [updates, setUpdates] = useState(undefined);

  useEffect(() => {
    async function getUpdates() {
      const response = await updatesService.getUpdates();
      setUpdates(response);
    }
    getUpdates();
  }, []);

  /* Offline & no cached data state */
  if (!navigator.onLine) {
    if (updates?.status !== 'success') {
      return (
        <div className="offline-style">
          {offline}
          <b>You are not connected to the internet</b>
          <p>
            Information for this country can't be displayed because you are
            currently offline. Please check your internet connection.
          </p>
        </div>
      );
    }
  }

  /* Loading state */
  if (!updates && navigator.onLine) {
    return <div className=".loading-style">{loading}</div>;
  }
  /* Error state */
  if (updates.status === 'failed' && navigator.onLine) {
    return (
      <div style={{ marginTop: '14px' }}>
        An error occured while fetching updates.
      </div>
    );
  }

  console.log('updates', updates);
  return (
    <div className=".ticker">
      <ul>
        {updates?.data?.updates?.map(update => (
          <li key={update.date}>
            <div className="ld-ticker--bar">
              <div className="ld-ticker--dot-container">
                <div
                  aria-label={UPDATE_TYPES[update.type.toLowerCase()]}
                  className={'ld-ticker--dot' + update.type.toLowerCase()}
                ></div>
              </div>
              <div className="ld-ticker--line"></div>
            </div>
            <div className="ld-ticker--content">
              <div className="ld-ticker--title">{update.title}</div>
              <div className="ld-ticker--content">{update.content}</div>
              {update.link ? (
                <div className="ld-ticker--link">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={update.link}
                  >
                    Source
                  </a>
                </div>
              ) : (
                ''
              )}
              <div className="ld-ticker--date">{update.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
