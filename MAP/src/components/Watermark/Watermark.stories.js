import React from 'react';

import Watermark from './Watermark';

export default {
    title: 'Component/Watermark',
    component: Watermark,
    argTypes: {
        dark: { control: 'boolean' },
    },
};

const Template = (args) => <Watermark {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    dark: false,
};
