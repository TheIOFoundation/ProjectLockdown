import React from 'react';

import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
  argTypes: {}
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};