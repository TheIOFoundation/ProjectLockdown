import Tabs from './Tabs';

const parameters = {
  title: 'Component/Tabs',
  component: Tabs,
  argTypes: {},
};

const Template = args => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: [
    <button id="info" key={0}>
      info
    </button>,
    <button id="settings" key={1}>
      settings
    </button>,
    <button id="updates" key={2}>
      updates
    </button>,
    <button id="contribute" key={3}>
      contribute
    </button>,
  ],
  close: () => console.log('onClose'),
  switchContent: val => console.log('onSwitchContent', val),
};

export default parameters;
