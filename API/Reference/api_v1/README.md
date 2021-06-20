## Backend scripts to load and transform data

### Requirements:
Minimum node version: 8.5

#### Installation:
For google sheet access, you will need either:
- A credentials.json generated from the google developer for sheets api v4 in the base folder
- Set `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY` environment variable

For MongoDB please set `MONGO_DB_USER` and `MONGO_DB_PASSWORD` and `MONGO_DB` in env.variables
```
npm install
```


#### Build & run:
```
npm start
```

#### Debug run
*Note: Still replaces data*
```
npm run dev
```

#### Test
```
npm run test
```