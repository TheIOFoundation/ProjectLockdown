/**
 * Parses rows into associative arrays
 * @param {array} headers 
 * @param {array} rows 
 */
export function transposeRows(headers, rows) {
  return rows.map((row) => {
    var obj = {};
    for (var i = 0; i < headers.length; i++) {
      obj[headers[i]] = row[i];
    }
    return obj;
  });
}

/**
 * Parses columns into associative arrays
 * @param {array} headers 
 * @param {array} columns
 * @param {boolean?} isFirstColumnOnly
 */
export function transposeColumns(headers, columns, isFirstColumnOnly = false) {
  var obj = {};
  for (var i = 0; i < headers.length; i++) {
    if (columns[i])
      obj[headers[i]] = isFirstColumnOnly ? columns[i][0] : columns[i];
  }
  return obj;
}