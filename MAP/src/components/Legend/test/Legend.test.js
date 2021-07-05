import React from 'react';
import renderer from 'react-test-renderer';
import AppContext from '../../../contexts/AppContext';
import envMock from './mock/envMock';

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

it('render Correctly with context data' , async () => {
    const tree =  renderer.create(
        <AppContext.Provider value={envMock}>
            <Legend {...props} />
        </AppContext.Provider>
    ).root;
    // query for element
    const element = tree.findByType("div");

    expect(element.props.children.length).toEqual(4);
})

