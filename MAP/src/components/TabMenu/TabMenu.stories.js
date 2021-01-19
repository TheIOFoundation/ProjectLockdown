import { TabMenu } from './TabMenu';

export default {
  title: 'Component/TabMenu',
  component: TabMenu,
  argTypes: {
    dark: { control: 'boolean' },
    isMobile: { control: 'boolean' },
    opened: { control: 'boolean' },
  },
};

const Template = args => <TabMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  locale: { t: s => s },
  opened: false,
  close: () => {
    console.log('close');
  },
  onLocateChange: a => {
    console.log('onLocateChange arg:', a);
  },
  isMobile: false,
};
