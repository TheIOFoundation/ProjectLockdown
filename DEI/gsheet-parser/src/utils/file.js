import fs from 'fs';
import path from 'path';

export const dataPath = path.join(__dirname, '../../../data');

export async function writeJSON(name, data) {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFile(`${dataPath}/${name}.json`, JSON.stringify(data), resolve);
    } catch (e) {
      reject(e);
    }
  })
}