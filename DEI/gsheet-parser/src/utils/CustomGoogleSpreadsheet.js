import { GoogleSpreadsheet } from 'google-spreadsheet';

export class CustomGoogleSpreadsheet extends GoogleSpreadsheet {
  /**
   * Added capability to execute batchGet API:
   * https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchGet
   * @param {string[]} ranges 
   */
  async batchGetGridRanges(ranges) {
    // 'ranges' key is multiple in this request
    const params = new URLSearchParams();
    params.append('majorDimension', 'ROWS');
    params.append('valueRenderOption', 'FORMATTED_VALUE');
    params.append('dateTimeRenderOption', 'FORMATTED_STRING');
    ranges.forEach(range => {
      if (!range)
        params.append('ranges', range);
    });
    var result;
    try {
      result = await this.axios.get(`/values:batchGet?${params.toString()}`);
    } catch (error) {
      logger.log(`CustomGoogleSpreadsheet.batchGetGridRanges: can't fetch empty range`);
      logger.error(error);
    }

    return (result.data.valueRanges || []).map(d => d['values']);
  }
}