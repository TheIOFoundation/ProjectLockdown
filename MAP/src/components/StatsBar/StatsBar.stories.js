import StatsBar from './StatsBar.js';

export default {
    title: 'Component/StatsBar',
    component: StatsBar,
    argTypes: {
        dark: { control: 'boolean' },
    },
};

const Template = (args) => <StatsBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    dark: true,
};
