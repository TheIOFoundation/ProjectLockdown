import fs from 'fs';
import path from 'path';

export const lockdownSheetId = '1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0';
export const lockdownSheetUrl = `https://docs.google.com/spreadsheets/d/${lockdownSheetId}`;

export const googleServiceCredentialsJson = (() => {
  // Attempt to get from env
  if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
    return {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      // fix escaped newlines in CI
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n')
    };
  }

  // Attempt to get from local file
  const credsFullpath = path.join(__dirname, '../credentials.json');
  if (fs.existsSync(credsFullpath)) {
    const content = require(credsFullpath);
    return content;
  }
})();

// Use API key -> Doesn't work for now
export const googleSpreadsheetAPIKey = process.env.GOOGLESHEET_API_KEY;
