import Zoom from './Zoom.js';

export default {
    title: 'Component/Zoom',
    component: Zoom,
    argTypes: {
        dark: { control: 'boolean' },
    },
};

const Template = (args) => <Zoom {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    dark: true,
};
