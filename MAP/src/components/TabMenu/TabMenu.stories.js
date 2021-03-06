import { TabMenu } from './TabMenu';
import * as ExpandableStories from '../Expandable/Expandable.stories';
import * as SettingsStories from '../Settings/Settings.stories';
import * as TabsStories from '../Tabs/Tabs.stories';
import * as TickerStories from '../Ticker/Ticker.stories';

const parameters = {
  title: 'Component/TabMenu',
  component: TabMenu,
};

const Template = args => <TabMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...ExpandableStories.Primary.args,
  ...SettingsStories.Primary.args,
  ...TabsStories.Primary.args,
  ...TickerStories.Primary.args,
  opened: false,
  close: () => {
    console.log('close');
  },
  onLocateChange: a => {
    console.log('onLocateChange arg:', a);
  },
  isMobile: false,
};

export default parameters;
