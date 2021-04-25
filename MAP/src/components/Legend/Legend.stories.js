import { Legend } from './Legend';

const parameters = {
  title: 'Component/Legend',
  component: Legend,
  argTypes: {
    dark: { control: 'boolean' },
  },
};

const Template = args => <Legend {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export default parameters;
