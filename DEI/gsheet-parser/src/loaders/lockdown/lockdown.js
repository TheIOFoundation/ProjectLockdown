import getDocument, { getWorksheetByTitle } from './googlesheet';
import { transposeRows } from '../../utils/dataHelper';
import { letterToColumn, columnToLetter } from 'google-spreadsheet/lib/utils';
import logger from '../../utils/logger';
import { SimpleGrid } from '../../utils/SimpleGrid';
import { ENTRY_COLUMN_LENGTH, parseEntry } from './parsers/lockdownParser';
import { getSnapshots } from './snapshot/processor';
import { connect } from '../../repositories';

import * as TiofRegions from '../../services/regions.services';
import * as TiofTerritories from '../../services/territories.services';

const { v4: uuidv4 } = require('uuid');


// Number of territories to query through batchGet at a time
const BATCH_SIZE = 25;

// Number of entries to batchGet from google sheet
const ENTRIES_TO_FETCH = 100;

/**
 * Gets data from "Global" sheet.
 * @returns {array}
 */
export async function getGlobalData() {
/*   const sheet = await getWorksheetByTitle('Global');
  //const rows = await sheet.getCellsInRange('B5:F253'); // only countries, not including areas, e.g. Beijing, Western Australia, etc
  const rows = await sheet.getCellsInRange('B5:X432'); // including areas, e.g. Beijing, Western Australia, ISO 3166-2

  const headers = ['status', 'jump', 'territory', 'iso2', 'iso3', 'lastTimeUpdated',
    'territorySource', 'populationSource', 'covid-19Source', 'notes', 'url', 'region',
    'boundariesLevel', 'featureID', 'wikidataID', 'iso3_2', 'unitCode', 'description', 'languages',
    'research', 'encode', 'review', 'iso3166-2'];
  return transposeRows(headers, rows); */

  const sheet = await getWorksheetByTitle('Global');
  const rows = await sheet.getCellsInRange('B5:F253');
  const headers = ['status', 'jump', 'territory', 'iso2', 'iso3'];
  return transposeRows(headers, rows);
}

export async function getLockdownData(title, cellsInRange) {
  const sheet = await getWorksheetByTitle(title);
  const rows = await sheet.getCellsInRange(cellsInRange);
}

export async function insertTerritory(row) {
  
  if (row['region']?.trim() != '') 
      try {
       const region = row['region']?.trim();
        const regionData = await TiofRegions.findOneOrCreate(region);   
       const territory = {
          pldCode: row['iso3'],
          name: row['territory'],
          notes: row['notes'],
          description: row['description'],
          is02: row['iso2'],
          is03: row['iso3'],
          unCode: row['unitCode'],
          natoCode: row['unitCode'],
          wikidataId: row['wikidataID'],
          researcher: row['research'],
          encoder: row['encode'],
          editor: row['review'],
          region: (regionData._id?? null),
          boundaryLevel: row['boundariesLevel'],
          subTerritories: []
        };
        try {
          await TiofTerritories.findOneOrCreate(territory);
        } catch (error) {
          logger.error(error);
        }
      } catch (error) {
        logger.log(error)
      }
    
  return row['iso3'];
}

/**
 * Convert Global sheet data convert them into Environments JSON data https://theiofoundation.stoplight.io/docs/projectlockdown/API/Reference/Project-Lockdown.v1.json/paths/~1Environments~1%7BDSLUID%7D~1%7BModule%7D~1%7BEnvironmentUID%7D/get 
 * and store in CosmosDB
 * @param {array} territories
 */
export async function insertEnvironment(db, territoryIds) {
  // make the Environment one by one, and insert into the DB
  var env = {
    "EnvironmentUID": "1",
    "DSL": [
      {
        "DSLUID": "1",
        "Name": "Main Data Set Layer",
        "Version": "1.0.0",
        "Type": "Thematic",
        "Status": "Ready",
        "Description": "Main Data Set Layer (Test Sample)",
        "Contact": {
          "UserUID": "1",
          "Type": "Human",
          "Licenses": [
            {
              "LicenseUID": "1",
              "DSLUID": "string",
              "Modules": {
                "API": {},
                "MAP": {
                  "Operations": {}
                }
              }
            }
          ],
        },
        "MaxBoundary": "string",
        "SourceTypes": [
          {
            "SourceTypeUID": "string",
            "Type": "NGO",
            "UI": {
              "Icon": "string"
            }
          }
        ],
        "Snapshots": [
          {
            "SnapshotUID": "string",
            "SourceTypeUID": "string",
            "DSLUID": "string",
            "Type": "DataPoint",
            "Frequency": "OnSpot",
            "Answers": [
              {
                "AnswerUID": "string",
                "Value": {
                  "ResponseUID": "string",
                  "GeneratedBy": "Funnel",
                  "Highlights": "string",
                  "Type": "string",
                  "Value": "string"
                },
                "DateStart": {
                  "DateUID": "string",
                  "Name": "string",
                  "Description": "string",
                  "Type": "string",
                  "Value": "string",
                  "ValueUTC": "string",
                  "GeneratedBy": "string",
                  "Highlights": "string",
                  "Links": [
                    {
                      "LinkUID": "string",
                      "Type": "Source",
                      "Name": "string",
                      "Description": "string"
                    }
                  ],
                  "UI": {
                    "Tooltip": "string",
                    "Name": "string",
                    "Description": "string"
                  }
                },
                "DateEnd": {
                  "DateUID": "string",
                  "Name": "string",
                  "Description": "string",
                  "Type": "string",
                  "Value": "string",
                  "ValueUTC": "string",
                  "GeneratedBy": "string",
                  "Highlights": "string",
                  "Links": [
                    {
                      "LinkUID": "string",
                      "Type": "Source",
                      "Name": "string",
                      "Description": "string"
                    }
                  ],
                  "UI": {
                    "Tooltip": "string",
                    "Name": "string",
                    "Description": "string"
                  }
                },
                "DataPointUID": "string",
                "Details": "string"
              }
            ]
          }
        ],
        "Sources": [
          {
            "SourceUID": "string",
            "Type": "Government",
            "Title": "string",
            "Territories": territoryIds,
            "Categories": [
              {
                "CategoryUID": "string",
                "DataPoints": [
                  {
                    "DataPointUID": "string",
                    "Definition": {
                      "NameShort": "string",
                      "Name": "string",
                      "Description": "string",
                      "IconID": "string",
                      "Inheritance": "string",
                      "DPObjectType": "string",
                      "Right": {
                        "RightUID": "string",
                        "OriginUID": "string",
                        "Name": "string",
                        "Stats": {
                          "StatUID": "string",
                          "Name": "string",
                          "Description": "string",
                          "Notes": "string",
                          "Type": "SourcesPerTerritory",
                          "Value": "string",
                          "URLDoc": {
                            "LinkUID": "string",
                            "Type": "Source",
                            "Name": "string",
                            "Description": "string"
                          },
                          "Status": "string",
                          "DateLastUpdate": {
                            "DateUID": "string",
                            "Name": "string",
                            "Description": "string",
                            "Type": "string",
                            "Value": "string",
                            "ValueUTC": "string",
                            "GeneratedBy": "string",
                            "Highlights": "string",
                            "Links": [
                              {
                                "LinkUID": "string",
                                "Type": "Source",
                                "Name": "string",
                                "Description": "string"
                              }
                            ],
                            "UI": {
                              "Tooltip": "string",
                              "Name": "string",
                              "Description": "string"
                            }
                          },
                          "URLCode": [
                            {
                              "LinkUID": "string",
                              "Type": "Source",
                              "Name": "string",
                              "Description": "string"
                            }
                          ]
                        },
                        "Description": "string"
                      },
                      "Tags": [
                        {
                          "TagUID": "string",
                          "Name": "string",
                          "Descrtiption": "string",
                          "Dates": [
                            {
                              "DateUID": "string",
                              "Name": "string",
                              "Description": "string",
                              "Type": "string",
                              "Value": "string",
                              "ValueUTC": "string",
                              "GeneratedBy": "string",
                              "Highlights": "string",
                              "Links": [
                                {
                                  "LinkUID": "string",
                                  "Type": "Source",
                                  "Name": "string",
                                  "Description": "string"
                                }
                              ],
                              "UI": {
                                "Tooltip": "string",
                                "Name": "string",
                                "Description": "string"
                              }
                            }
                          ],
                          "Stats": [
                            {
                              "StatUID": "string",
                              "Name": "string",
                              "Description": "string",
                              "Notes": "string",
                              "Type": "SourcesPerTerritory",
                              "Value": "string",
                              "URLDoc": {
                                "LinkUID": "string",
                                "Type": "Source",
                                "Name": "string",
                                "Description": "string"
                              },
                              "Status": "string",
                              "DateLastUpdate": {
                                "DateUID": "string",
                                "Name": "string",
                                "Description": "string",
                                "Type": "string",
                                "Value": "string",
                                "ValueUTC": "string",
                                "GeneratedBy": "string",
                                "Highlights": "string",
                                "Links": [
                                  {
                                    "LinkUID": "string",
                                    "Type": "Source",
                                    "Name": "string",
                                    "Description": "string"
                                  }
                                ],
                                "UI": {
                                  "Tooltip": "string",
                                  "Name": "string",
                                  "Description": "string"
                                }
                              },
                              "URLCode": [
                                {
                                  "LinkUID": "string",
                                  "Type": "Source",
                                  "Name": "string",
                                  "Description": "string"
                                }
                              ]
                            }
                          ],
                          "Links": [
                            {
                              "LinkUID": "string",
                              "Type": "Source",
                              "Name": "string",
                              "Description": "string"
                            }
                          ],
                          "Value": "string"
                        }
                      ],
                      "Tooltip": "string",
                      "Definition": "string",
                      "Encoding": {
                        "EncodingUID": "string",
                        "Name": "string",
                        "Description": "string",
                        "URL for UI": "string",
                        "Algorithm Details": "string",
                        "Options": [
                          {
                            "Value": "string",
                            "Type": "Image"
                          }
                        ],
                        "Stats": [
                          {
                            "StatUID": "string",
                            "Name": "string",
                            "Description": "string",
                            "Notes": "string",
                            "Type": "SourcesPerTerritory",
                            "Value": "string",
                            "URLDoc": {
                              "LinkUID": "string",
                              "Type": "Source",
                              "Name": "string",
                              "Description": "string"
                            },
                            "Status": "string",
                            "DateLastUpdate": {
                              "DateUID": "string",
                              "Name": "string",
                              "Description": "string",
                              "Type": "string",
                              "Value": "string",
                              "ValueUTC": "string",
                              "GeneratedBy": "string",
                              "Highlights": "string",
                              "Links": [
                                {
                                  "LinkUID": "string",
                                  "Type": "Source",
                                  "Name": "string",
                                  "Description": "string"
                                }
                              ],
                              "UI": {
                                "Tooltip": "string",
                                "Name": "string",
                                "Description": "string"
                              }
                            },
                            "URLCode": [
                              {
                                "LinkUID": "string",
                                "Type": "Source",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "Status": "string",
                    "DateCreated": {
                      "DateUID": "string",
                      "Name": "string",
                      "Description": "string",
                      "Type": "string",
                      "Value": "string",
                      "ValueUTC": "string",
                      "GeneratedBy": "string",
                      "Highlights": "string",
                      "Links": [
                        {
                          "LinkUID": "string",
                          "Type": "Source",
                          "Name": "string",
                          "Description": "string"
                        }
                      ],
                      "UI": {
                        "Tooltip": "string",
                        "Name": "string",
                        "Description": "string"
                      }
                    },
                    "DateUpdated": {
                      "DateUID": "string",
                      "Name": "string",
                      "Description": "string",
                      "Type": "string",
                      "Value": "string",
                      "ValueUTC": "string",
                      "GeneratedBy": "string",
                      "Highlights": "string",
                      "Links": [
                        {
                          "LinkUID": "string",
                          "Type": "Source",
                          "Name": "string",
                          "Description": "string"
                        }
                      ],
                      "UI": {
                        "Tooltip": "string",
                        "Name": "string",
                        "Description": "string"
                      }
                    },
                    "Stats": [
                      {
                        "StatUID": "string",
                        "Name": "string",
                        "Description": "string",
                        "Notes": "string",
                        "Type": "SourcesPerTerritory",
                        "Value": "string",
                        "URLDoc": {
                          "LinkUID": "string",
                          "Type": "Source",
                          "Name": "string",
                          "Description": "string"
                        },
                        "Status": "string",
                        "DateLastUpdate": {
                          "DateUID": "string",
                          "Name": "string",
                          "Description": "string",
                          "Type": "string",
                          "Value": "string",
                          "ValueUTC": "string",
                          "GeneratedBy": "string",
                          "Highlights": "string",
                          "Links": [
                            {
                              "LinkUID": "string",
                              "Type": "Source",
                              "Name": "string",
                              "Description": "string"
                            }
                          ],
                          "UI": {
                            "Tooltip": "string",
                            "Name": "string",
                            "Description": "string"
                          }
                        },
                        "URLCode": [
                          {
                            "LinkUID": "string",
                            "Type": "Source",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ],
                    "Answers": [
                      {
                        "AnswerUID": "string",
                        "Value": {
                          "ResponseUID": "string",
                          "GeneratedBy": "Funnel",
                          "Highlights": "string",
                          "Type": "string",
                          "Value": "string"
                        },
                        "DateStart": {
                          "DateUID": "string",
                          "Name": "string",
                          "Description": "string",
                          "Type": "string",
                          "Value": "string",
                          "ValueUTC": "string",
                          "GeneratedBy": "string",
                          "Highlights": "string",
                          "Links": [
                            {
                              "LinkUID": "string",
                              "Type": "Source",
                              "Name": "string",
                              "Description": "string"
                            }
                          ],
                          "UI": {
                            "Tooltip": "string",
                            "Name": "string",
                            "Description": "string"
                          }
                        },
                        "DateEnd": {
                          "DateUID": "string",
                          "Name": "string",
                          "Description": "string",
                          "Type": "string",
                          "Value": "string",
                          "ValueUTC": "string",
                          "GeneratedBy": "string",
                          "Highlights": "string",
                          "Links": [
                            {
                              "LinkUID": "string",
                              "Type": "Source",
                              "Name": "string",
                              "Description": "string"
                            }
                          ],
                          "UI": {
                            "Tooltip": "string",
                            "Name": "string",
                            "Description": "string"
                          }
                        },
                        "DataPointUID": "string",
                        "Details": "string"
                      }
                    ],
                    "URLDoc": {
                      "LinkUID": "string",
                      "Type": "Source",
                      "Name": "string",
                      "Description": "string"
                    },
                    "URLEditorGuide": {
                      "LinkUID": "string",
                      "Type": "Source",
                      "Name": "string",
                      "Description": "string",
                      "Stats": [
                        {
                          "StatUID": "string",
                          "Name": "string",
                          "Description": "string",
                          "Notes": "string",
                          "Type": "SourcesPerTerritory",
                          "Value": "string",
                          "URLDoc": {},
                          "Status": "string",
                          "DateLastUpdate": {
                            "DateUID": "string",
                            "Name": "string",
                            "Description": "string",
                            "Type": "string",
                            "Value": "string",
                            "ValueUTC": "string",
                            "GeneratedBy": "string",
                            "Highlights": "string",
                            "UI": {
                              "Tooltip": "string",
                              "Name": "string",
                              "Description": "string"
                            }
                          },
                        }
                      ]
                    }
                  }
                ],
                "PermalinkDocs": "string",
                "Definition": {
                  "Name": "string",
                  "Description": "string",
                  "Tags": "string",
                  "Order": "string"
                },
                "CategoryStatus": "string",
                "UI": {
                  "TDOLayout": {
                    "LayoutUID": "string",
                    "Name": "string",
                    "Description": "string",
                    "URLCSS": {
                      "LinkUID": "string",
                      "Type": "Source",
                      "Name": "string",
                      "Description": "string"
                    }
                  },
                  "TabMaxWidth": "string",
                  "TabTitle": "string",
                  "TabTooltip": "string"
                }
              }
            ],
            "DSE": {
              "Funnel": "Insourcing",
              "Status": "string",
              "EntryUID": "string",
              "Media": "string",
              "Categories": [],
              "DateTimestampEncoded ": {
                "DateUID": "string",
                "Name": "string",
                "Description": "string",
                "Type": "string",
                "Value": "string",
                "ValueUTC": "string",
                "GeneratedBy": "string",
                "Highlights": "string",
                "Links": [
                  {
                    "LinkUID": "string",
                    "Type": "Source",
                    "Name": "string",
                    "Description": "string",
                    "Stats": [
                      {
                        "StatUID": "string",
                        "Name": "string",
                        "Description": "string",
                        "Notes": "string",
                        "Type": "SourcesPerTerritory",
                        "Value": "string",
                        "URLDoc": {},
                        "Status": "string",
                        "DateLastUpdate": {}
                      }
                    ]
                  }
                ],
                "UI": {
                  "Tooltip": "string",
                  "Name": "string",
                  "Description": "string"
                }
              }
            },
            "IssueUID": "string",
            "TimeMachines": [
              {
                "TimeMachineUID": "string",
                "Priority": "string",
                "Name": "string",
                "Description": "string",
                "CreateURL": {
                  "LinkUID": "string",
                  "Type": "Source",
                  "Name": "string",
                  "Description": "string"
                },
                "ReadURL": {
                  "LinkUID": "string",
                  "Type": "Source",
                  "Name": "string",
                  "Description": "string",
                },
                "HelpURL": {
                  "LinkUID": "string",
                  "Type": "Source",
                  "Name": "string",
                  "Description": "string"
                },
                "DateFirstCreated": {
                  "DateUID": "string",
                  "Name": "string",
                  "Description": "string",
                  "Type": "string",
                  "Value": "string",
                  "ValueUTC": "string",
                  "GeneratedBy": "string",
                  "Highlights": "string",
                  "UI": {
                    "Tooltip": "string",
                    "Name": "string",
                    "Description": "string"
                  }
                }
              }
            ],
            "URLSource": {
              "LinkUID": "string",
              "Type": "Source",
              "Name": "string",
              "Description": "string"
            },
            "URLGitHubIssue": {
              "LinkUID": "string",
              "Type": "Source",
              "Name": "string",
              "Description": "string"
            },
            "DateIssued": {
              "DateUID": "string",
              "Name": "string",
              "Description": "string",
              "Type": "string",
              "Value": "string",
              "ValueUTC": "string",
              "GeneratedBy": "string",
              "Highlights": "string",
              "UI": {
                "Tooltip": "string",
                "Name": "string",
                "Description": "string"
              }
            },
            "DateStart": {
              "DateUID": "string",
              "Name": "string",
              "Description": "string",
              "Type": "string",
              "Value": "string",
              "ValueUTC": "string",
              "GeneratedBy": "string",
              "Highlights": "string",
              "UI": {
                "Tooltip": "string",
                "Name": "string",
                "Description": "string"
              }
            },
            "DateEnd": {
              "DateUID": "string",
              "Name": "string",
              "Description": "string",
              "Type": "string",
              "Value": "string",
              "ValueUTC": "string",
              "GeneratedBy": "string",
              "Highlights": "string",
              "UI": {
                "Tooltip": "string",
                "Name": "string",
                "Description": "string"
              }
            },
            "Stage": "BO: Triage",
            "SourceInstances": [
              {
                "SourceInstanceUID": "string",
                "Research": "string",
                "Triage": "string",
                "Encode": "string",
                "Review": "string",
                "Log": {
                  "LogUID": "string",
                  "Operation": "Encode",
                  "UserUID": "string",
                  "Notes": "string",
                  "SourceUID": "string",
                  "Dates": [
                    {
                      "DateUID": "string",
                      "Name": "string",
                      "Description": "string",
                      "Type": "string",
                      "Value": "string",
                      "ValueUTC": "string",
                      "GeneratedBy": "string",
                      "Highlights": "string",
                      "Links": [
                        {
                          "LinkUID": "string",
                          "Type": "Source",
                          "Name": "string",
                          "Description": "string",
                          "Stats": [
                            {
                              "StatUID": "string",
                              "Name": "string",
                              "Description": "string",
                              "Notes": "string",
                              "Type": "SourcesPerTerritory",
                              "Value": "string",
                              "URLDoc": {},
                              "Status": "string",
                              "DateLastUpdate": {}
                            }
                          ]
                        }
                      ],
                      "UI": {
                        "Tooltip": "string",
                        "Name": "string",
                        "Description": "string"
                      }
                    }
                  ],
                  "Module": "string"
                },
                "Stage": "string"
              }
            ]
          }
        ],
        "Territories": territoryIds
      }
    ],
    "Project": {
      "ProjectUID": "string",
      "GlobalVars": {
        "Locale": "string",
        "URLSources": {
          "LinkUID": "string",
          "Type": "Source",
          "URL": "https://TIOF.Click?DSLStats=1&type=urldoc"
        },
        "DefaultDSL": "string"
      },
      "Name": "string",
      "Description": "string"
    }
  };
  
  // insert environment into cosmosdb
  // TODO: maybe use insert or update??
  try {
    let insertResult = await db.environmentRepository.insertOrUpdate(env);
    // reference: http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html#~insertWriteOpResult
    if (insertResult.result.n > 0 && insertResult.result.ok == 1) {
      logger.log(`Insert environment successful.`);
    }
  } catch (error) {
    logger.log(`Error insert environment`);
    logger.error(error);
  }
}


/**
 * Groups territories and request data from google API at batch size
 * @param {array} territories 
 */
export async function batchGetTerritoriesEntryData(territories) {
  // const database = await connect();
  const startCacheColumn = 'H';
  const startCacheColumnIndex = letterToColumn(startCacheColumn);
  const result = [];
  const doc = await getDocument();
  const endCacheColumn = columnToLetter(startCacheColumnIndex + (ENTRIES_TO_FETCH * ENTRY_COLUMN_LENGTH));
  const rangeToCache = `${startCacheColumn}1:${endCacheColumn}65`;
  let batch = []
  const shouldResetApiCache = false;
  const territoryIds = [];
  try {
  /*   territories.forEach( row => {
       territoryIds.push(insertTerritory(row));
    }); */
    territories.forEach(row => {
      territoryIds.push(row);
      return false;
    });
  }
  catch (error) {
    throw new Error(`Error during processing territories: ${error}`);
  }
  
  try {
    // await insertEnvironment(database, territoryIds);
     
    while (batch = territories.splice(0, BATCH_SIZE)) {
      if (batch.length < 1) break;

      let gridRanges = batch.map(territory => `${territory['iso3']}!${rangeToCache}`);
      logger.log(`[Lockdown:WorkSheet] ${batch.map(t => t['iso3']).join(' ')}`);
      let gridData = await doc.batchGetGridRanges(gridRanges);

      for(let i= 0; i< batch.length; i++){
        const pldCode = batch[i]['iso3'] 
        let workSheet = await getWorksheetByTitle(pldCode);
          let rowCount = workSheet['gridProperties']['rowCount'];
          let columnCount = workSheet['gridProperties']['columnCount'];
          let gridSheet = new SimpleGrid(rangeToCache, gridData[i], rowCount, columnCount);
          const entries = [];    
          // How many entries should we loop through according to columns available on sheet
          let entryCount = Math.ceil((columnCount - startCacheColumnIndex) / ENTRY_COLUMN_LENGTH);
          for (let entryIndex = 0; entryIndex < entryCount; entryIndex++) {
            // Cell ranges
            // console.log({gridSheet});
          
           let entryData = parseEntry(gridSheet, entryIndex);
            if (entryData) {
              entries.push(entryData);
            }
          }
           for(let entry of entries){
           const {measure, land, flight,sea} = entry;
            break
          } 
      }
      break
        }
  
 
  }
  catch (error) {
    throw error;
  }

  // database.close()
  return result;
}

export default async function loadData() {
  const territories = await  getGlobalData();
  return  batchGetTerritoriesEntryData(territories);
}