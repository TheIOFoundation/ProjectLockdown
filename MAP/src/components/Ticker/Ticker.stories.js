import { Ticker } from './Ticker';

const parameters = {
  title: 'Component/Ticker',
  component: Ticker,
};

const Template = args => <Ticker {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export default parameters;
