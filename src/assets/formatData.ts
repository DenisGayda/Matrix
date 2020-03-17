import { jsonData } from '../app/interfaces/back-data-interfaces';
import { tableData } from '../app/interfaces/fixed-table-data-interfaces';

export function formatData(limb: tableData | jsonData): tableData {
  let result = Object.assign(limb);

  Object.keys(result).map(
    element => {
      typeof result[element] === 'object' ?
        result[element] = formatData(result[element]) :
        result = Object.values(result);
    });

  return result;
}
