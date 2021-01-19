import { Ticker } from './Ticker';

const story = {
  title: 'Component/Ticker',
  component: Ticker,
};

export default story;
const Template = args => <Ticker {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
