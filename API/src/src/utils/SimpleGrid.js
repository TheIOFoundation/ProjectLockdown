import { letterToColumn } from 'google-spreadsheet/lib/utils';
import GoogleSpreadsheetWorksheet from 'google-spreadsheet/lib/GoogleSpreadsheetWorksheet';
import { getRowAndColumnIndexA1 } from './sheet';
import get from 'lodash/get';

/**
 * 2d sparse grid that supports A1 queries. 
 * Not drop-in compatible with GoogleSpreadsheetWorksheet. Borrowed some from
 * https://github.com/theoephraim/node-google-spreadsheet/blob/master/lib/GoogleSpreadsheetWorksheet.js
 */
export class SimpleGrid {
  constructor(range, data, rowCount, columnCount) {
    const [startA1, endA1] = range.split(':');
    const [startRow, startColumn] = getRowAndColumnIndexA1(startA1);

    this._cells = [];
    this._rowCount = rowCount;
    this._columnCount = columnCount;

    this._fillCellData(data, startRow, startColumn, rowCount, columnCount);
  }

  get rowCount() {
    return this._rowCount;
  }

  get columnCount() {
    return this._columnCount;
  }

  getCellByA1(a1Address) {
    const split = a1Address.match(/([A-Z]+)([0-9]+)/);
    const columnIndex = letterToColumn(split[1]);
    const rowIndex = parseInt(split[2]);
    return this.getCell(rowIndex - 1, columnIndex - 1);
  }

  getCell(rowIndex, columnIndex) {
    if (rowIndex < 0 || columnIndex < 0) throw new Error('Min coordinate is 0, 0');
    if (rowIndex >= this.rowCount || columnIndex >= this.columnCount) {
      throw new Error(`Out of bounds, grid is ${this.rowCount} by ${this.columnCount}, but requested ${rowIndex+1}:${columnIndex+1}`);
    }

    // Currently does not check if data is loaded or just empty.
    return get(this._cells, `[${rowIndex}][${columnIndex}]`);
  }

  _fillCellData(data, startRow, startColumn, numRows, numColumns) {
    // update cell data for entire range
    for (let i = 0; i < numRows; i++) {
      // TODO: Check if following logic applies
      const actualRow = startRow + i;
      for (let j = 0; j < numColumns; j++) {
        const actualColumn = startColumn + j;
        // if the row has not been initialized yet, do it
        if (!this._cells[actualRow]) this._cells[actualRow] = [];

        const cellData = get(data, `[${i}][${j}]`);
        // update the cell object or create it
        if (cellData != undefined) {
          this._cells[actualRow][actualColumn] = cellData;
        }
      }
    }
  }
}

export class SimpleGridSheet extends SimpleGrid {
  /**
   * 
   * @param {string} range 
   * @param {array} data 
   * @param {GoogleSpreadsheetWorksheet} sheet 
   */
  constructor(range, data, sheet) {
    super(range, data, sheet['gridProperties']['rowCount'], sheet['gridProperties']['columnCount']);
  }
}
