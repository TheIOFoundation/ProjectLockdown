import React from 'react';
import { Legend } from './Legend';

export default {
    title: 'Component/Legend',
    component: Legend,
    argTypes: {
        dark: { control: 'boolean' },
    },
};

const Template = (args) => <Legend {...args} />;

export const Primary = Template.bind({});
Primary.args = { };