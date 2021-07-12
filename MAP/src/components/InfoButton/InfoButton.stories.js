import InfoButton from './InfoButton.js';

export default {
    title: 'Component/InfoButton',
    component: InfoButton,
    argTypes: { },
};

const Template = (args) => <InfoButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
