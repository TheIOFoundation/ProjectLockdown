import React from 'react';
import renderer from 'react-test-renderer';
/* import AppContext from '../../../contexts/AppContext';
import { fetchEnvironments } from '../../../api'; */

import { Legend} from '../Legend';
const props = {
    tab: "dailyLife",
    dark: "false",
    t: (v)=>v,
    ii8n: (i) =>i 
}
it('renders correctly when there are no items',  () => {
    const tree = renderer.create(<Legend {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

/* it('render Correctly with context data' , async () => {
    const data = await fetchEnvironments();
    const tree =  renderer.create(
        <AppContext.Provider value={data}>
            <Legend {...props} />
        </AppContext.Provider>
    );
    console.log('Tree ', data);
    expect(tree).toMatchSnapshot();

}) */

