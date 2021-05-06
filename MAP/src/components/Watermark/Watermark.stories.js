import React from 'react';

import Watermark from './Watermark';

export default {
    title: 'Component/Watermark',
    component: Watermark,
    argTypes: {
        dark: { control: 'boolean' },
        fontsize: {
            control: { type: 'range', min: 1, max: 10, step: 1 }
        },
    },
};

const Template = (args) => <Watermark {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    dark: false,
    fontsize: 2,
};
