import Entry from '../types/Entry';

export default class SnapshotRepository {
  constructor(db) {
    this.model = db.collection('snapshots');
  }

  /**
   * @param {string} iso3
   * @param {Date} date
   * @returns {Promise<Array<Entry>>}
   */
  getByTerritoryAndDate(iso, date) {
    const query = {
      start_date: { $lte: date },
      end_date: { $gte: date },
    };
    this.applyIsoFilter(iso, query);
    return this.model.find(query);
  }

  /** @private */
  applyIsoFilter(iso, query) {
    if (iso.length == 2) {
      query.iso2 = iso;
    } else {
      query.iso3 = iso;
    }
    return query;
  }

  /**
   *
   * @param {string} iso
   * @param {Date} startDate
   * @param {Date} endDate
   */
  getByTerritoryAndDateRange(iso, startDate, endDate) {
    const query = {
      start_date: { $lte: endDate },
      end_date: { $gte: startDate },
    };
    this.applyIsoFilter(iso, query);
    return this.model.find(query);
  }

  /**
   *
   * @param {Date} date
   */
  getByDateGroupByCountries(date) {
    return this.model.aggregate([
      {
        $match: {
          start_date: { $lte: date },
          end_date: { $gte: date },
        },
      },
      {
        $group: {
          _id: '$iso3',
          ranges: { $push: '$$ROOT' },
        },
      },
    ]);
  }

  /**
   * 
   * @param {Date} startDate 
   * @param {Date} endDate 
   */
  getByDateRangeGroupByCountries(startDate, endDate) {
    return this.model.aggregate([
      {
        $match: {
          start_date: { $lte: endDate },
          end_date: { $gte: startDate },
        },
      },
      {
        $group: {
          _id: '$iso2',
          ranges: { $push: '$$ROOT' },
        },
      },
    ]);
  }

  /**
   *
   * @param {string} measureLabel
   * @param {Date} date
   */
  getByMeasureAndDate(measureLabel, date) {
    return this.model.find({
      'measures.label': measureLabel,
      start_date: { $lte: date },
      end_date: { $gte: date },
    });
  }

  getByIsoAndMeasureAndDateRange(iso, startDate, endDate, measures) {
    var isoFilter = this.applyIsoFilter(iso, {})
    var query = [
      {
        '$match': {
          ...isoFilter,
          'start_date': {
            '$lte': endDate
          },
          'end_date': {
            '$gte': startDate
          },
          'measures.label': {
            '$in': measures
          }
        }
      }, {
        '$project': {
          'source_name': 1,
          'source_url': 1,
          'start_date': 1,
          'end_date': 1,
          'iso2': 1,
          'iso3': 1,
          'measures': {
            '$filter': {
              'input': '$measures',
              'as': 'm',
              'cond': {
                '$in': [
                  '$$m.label', measures
                ]
              }
            }
          }
        }
      }
    ];
    return this.model.aggregate(query);
  }

  /**
   * 
   * @param {Date} startDate 
   * @param {Date} endDate 
   * @param {Array<string>} measures 
   */
  getByMeasureAndDateRange(startDate, endDate, measures) {
    var query = [
      {
        '$match': {
          'start_date': {
            '$lte': endDate
          },
          'end_date': {
            '$gte': startDate
          },
          'measures.label': {
            '$in': measures
          }
        }
      }, {
        '$project': {
          'source_name': 1,
          'source_url': 1,
          'start_date': 1,
          'end_date': 1,
          'iso2': 1,
          'iso3': 1,
          'measures': {
            '$filter': {
              'input': '$measures',
              'as': 'm',
              'cond': {
                '$in': [
                  '$$m.label', measures
                ]
              }
            }
          }
        }
      }
    ];
    return this.model.aggregate(query);
  }

  /**
   *
   * @param {*} snaphot
   */
  insert(snaphot) {
    return this.model.insert(snaphot);
  }

  /**
   *
   * @param {[]} snaphot
   */
  insertMany(snaphots) {
    return this.model.insertMany(snaphots);
  }

  // referenece: https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/
  insertManyOrUpdate(snapshots) {
    return snapshots.map((s) => {
      return this.model.updateMany(
        {
          unique_id: s.unique_id,
          start_date: s.start_date,
          end_date: s.end_date,
        },
        { $set: s },
        { upsert: true }
      );
    });
  }

  /**
   * Remove from db all docs with this ISO 2-letter country code or ISO 3-letter country code. 
   * @param {string} iso2CountryCode
   * @param {string} iso3CountryCode
   * @returns {Promise}
   */
  removeSnapshots(iso2CountryCode, iso3CountryCode) {
    // TODO: insert some default values, instead of clear all.
    // JFQueralt, "Clarification; Every territory tab in the Data Entry Interface (DEI) 
    // has a first empty Data Entry Set (DES - the collection of columns we use to codify 
    // a source). The rationale is that we are currently assuming that the starting point 
    // everywhere in the world was "positive", which is not true. This assumption works 
    // well in general due to the nature of the information we are collecting, for the 
    // time being. That DES should eventually be filled up with an "initial state" for 
    // each territory. You can safely ignore it for the time being." - 15 June 2020
    return this.model.deleteMany( { $or: [
      { "iso2": iso2CountryCode } , 
      { "iso3": iso3CountryCode } 
    ]});
  }

  /**
   *
   * Clears the entire database of all values, we won't want to call this unless we are sure.
   * @returns {Promise}
   */
  clear() {
    return this.model.deleteMany({});
  }
}
