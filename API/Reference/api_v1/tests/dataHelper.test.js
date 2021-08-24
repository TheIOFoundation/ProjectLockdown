import { transposeRows, transposeColumns } from '../src/utils/dataHelper';

test('should transpose rows', async () => {
  const data = transposeRows(['title','desc'], [
    ['data-title-1', 'data-desc-1'],
    ['data-title-2', 'data-desc-2'],
  ]);
  expect(data).toEqual([
    {
      'title': 'data-title-1',
      'desc': 'data-desc-1',
    },
    {
      'title': 'data-title-2',
      'desc': 'data-desc-2',
    }
  ]);
});

test('should transpose columns with single value', async () => {
  const data = transposeColumns(
    ['name', 'url', 'title', 'date'],
    [ 
      [ 'The act of killing coronavirus' ],
      [ 'https://www.google.com' ],
      [ 'State of Emergency' ],
      [ '1 March 2020' ] 
  ], true);

  expect(data).toEqual({ 
    name: 'The act of killing coronavirus',
    url: 'https://www.google.com',
    title: 'State of Emergency',
    date: '1 March 2020'
  });
});

test('should transpose columns with multiple values', async () => {
  const data = transposeColumns(
    ['max_gathering',
    'lockdown_status',
    'city_movement_restriction'],
    [ { start: '', end: '', value: '2' },
      { start: '', end: '', value: 'No' },
      { start: '', end: '', value: 'Yes' },
      { start: '', end: '', value: 'Partial' }]);

  expect(data).toEqual({
    max_gathering: { start: '', end: '', value: '2' },
    lockdown_status: { start: '', end: '', value: 'No' },
    city_movement_restriction: { start: '', end: '', value: 'Yes' } 
  });
})