import React from 'react';

import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
  argTypes: {
    dark: { control: 'boolean' },
  },
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dark: false,
};
