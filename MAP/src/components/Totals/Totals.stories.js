import Totals from "./Totals";

export default {
  title: 'Component/Totals',
  component: Totals,
  argTypes: {
    dark: {control: 'boolean'},
  },
};

const Template = args => {
  return <Totals {...args} />
}

export const Primary = Template.bind({});
Primary.args = {
  dark: true
}