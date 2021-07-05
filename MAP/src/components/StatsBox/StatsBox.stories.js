import StatsBox from './StatsBox';

export default {
  title: 'Component/StatsBox',
  component: StatsBox,
  argTypes: {
    dark: { control: 'boolean' },
  },
};

const Template = (args) => <StatsBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dark: true,
};
