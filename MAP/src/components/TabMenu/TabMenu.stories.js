import { TabMenu } from './TabMenu';

export default {
  title: 'Component/TabMenu',
  component: TabMenu,
  argTypes: {
    dark: { control: 'boolean' },
  },
};

const Template = args => <TabMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
