import { letterToColumn } from 'google-spreadsheet/lib/utils';
import GoogleSpreadsheetWorksheet from 'google-spreadsheet/lib/GoogleSpreadsheetWorksheet';
import { CustomGoogleSpreadsheet } from './CustomGoogleSpreadsheet';
import { SimpleGridSheet } from './SimpleGrid';

/**
 * This utility only gets the precached cells
 * Set isStripNull to true to follow sheet.getCellsInRange behaviour
 * TODO: Probably should accept interface when we convert to TS
 * @param {GoogleSpreadsheetWorksheet|SimpleGrid} sheet 
 * @param {string} range 
 * @param {boolean} isStripNull 
 */
export function getCachedCellsRange(sheet, range, isStripNull = false) {
  const [startCellA1, endCellA1] = range.split(':');
  const [startCellRow, startCellColumn] = getRowAndColumnIndexA1(startCellA1);
  const [endCellRow, endCellColumn] = getRowAndColumnIndexA1(endCellA1);

  const rows = [];
  // Loop through all sheet's cells
  for (var rowIndex = startCellRow; rowIndex <= endCellRow; rowIndex++) {
    let columns = [];
    for (var columnIndex = startCellColumn; columnIndex <= endCellColumn; columnIndex++) {
      let cell = sheet.getCell(rowIndex, columnIndex);
      let value = cell && cell.formattedValue ? cell.formattedValue : cell;

      // Strips null cell values
      if (value === null && isStripNull) {
        continue;
      }
      columns.push(value);
    }
    rows.push(columns);
  }
  return rows;
}

/**
 * Converts A1 address to row & column indexes
 * @param {string} a1Address 
 */
export function getRowAndColumnIndexA1(a1Address) {
  const split = a1Address.match(/([A-Z]+)([0-9]+)/);
  const columnIndex = letterToColumn(split[1]);
  const rowIndex = parseInt(split[2]);
  return [
    rowIndex - 1, 
    columnIndex - 1
  ];
}