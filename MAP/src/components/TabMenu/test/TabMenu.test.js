import React from 'react';
import renderer from 'react-test-renderer';
import { TabMenu } from '../TabMenu';
const props = {
    dark: "false",
    setDarkMode: jest.fn()
}

window.matchMedia = window.matchMedia || function() {
    return {
        matches: true,
        addEventListener: jest.fn(),
    };
};
it('renders correctly when there are no items', () => {
    const tree = renderer.create(<TabMenu {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });