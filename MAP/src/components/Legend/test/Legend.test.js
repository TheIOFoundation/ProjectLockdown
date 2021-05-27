import React from 'react';
import renderer from 'react-test-renderer';

import { Legend} from '../Legend';
const props = {
    tab: "dailyLife",
    dark: "false",
    t: (v)=>v,
    ii8n: (i) =>i 
}
it('renders correctly when there are no items', () => {
    const tree = renderer.create(<Legend {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });