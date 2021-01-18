import { useState, useEffect } from 'react';
import { updatesService } from '../services/updatesService.js';
import { offline, loading } from '../assets/icons/icons.js';
import '../style/shared.styles.scss';

const UPDATE_TYPES = {
  new_entry: 'new entry',
  announcement: 'announcement',
  rectification: 'rectification',
  promoting_project: 'project promotion',
  promoting_petition: 'petition',
};

export function Ticker() {
  const [updates, setUpdates] = useState(undefined);

  useEffect(async () => {
    const response = await updatesService.getUpdates();
    setUpdates(response);
  }, []);

  /* Offline & no cached data state */
  if (!navigator.onLine) {
    if (updates?.status !== 'success') {
      return (
        <div class="offline-style">
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
    return <div class=".loading-style">{loading}</div>;
  }

  /* Error state */
  if (updates.status === 'failed' && navigator.onLine) {
    return (
      <div style="margin-top: 14px;">
        An error occured while fetching updates.
      </div>
    );
  }

  return (
    <div class=".ticker">
      <ul>
        {updates?.data?.updates?.map(update => (
          <li>
            <div class="ld-ticker--bar">
              <div class="ld-ticker--dot-container">
                <div
                  aria-label={UPDATE_TYPES[update.type.toLowerCase()]}
                  class={'ld-ticker--dot' + update.type.toLowerCase()}
                ></div>
              </div>
              <div class="ld-ticker--line"></div>
            </div>
            <div class="ld-ticker--content">
              <div class="ld-ticker--title">{update.title}</div>
              <div class="ld-ticker--content">{update.content}</div>
              {update.link ? (
                <div class="ld-ticker--link">
                  <a
                    target="_blank"
                    rel="noopener noreferer"
                    href={update.link}
                  >
                    Source
                  </a>
                </div>
              ) : (
                ''
              )}
              <div class="ld-ticker--date">{update.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
