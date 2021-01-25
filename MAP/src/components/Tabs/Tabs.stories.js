import Tabs from './Tabs';

export default {
  title: 'Component/Tabs',
  component: Tabs,
  argTypes: {},
};

const Template = args => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: [
    <button id="info">info</button>,
    <button id="settings">settings</button>,
    <button id="updates">updates</button>,
    <button id="contribute">contribute</button>,
  ],
  close: () => console.log('onClose'),
  switchContent: val => console.log('onSwitchContent', val),
};
