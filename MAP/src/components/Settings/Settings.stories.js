import { Settings } from './Settings';

export default {
  title: 'Component/Settings',
  component: Settings,
  argTypes: {
    dark: { control: 'boolean' },
  },
};

const Template = args => <Settings {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  locale: {
    t: s => {
      switch (s) {
        case 'menu.userPreferenceSection.theme.action':
          return 'Toggle ';
        case 'menu.userPreferenceSection.theme.light':
          return 'Ligth mode';
        case 'menu.userPreferenceSection.theme.dark':
          return 'Dark mode';
        default:
          return s;
      }
    },
  },
  onClose: () => {
    console.log('onClose');
  },
};
