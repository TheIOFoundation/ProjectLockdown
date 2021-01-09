import { Dialog } from './Dialog';

export default {
  title: 'Component/Dialog',
  component: Dialog,
};

const Template = args => <Dialog {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
