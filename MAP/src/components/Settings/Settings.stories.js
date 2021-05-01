import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { Settings } from './Settings';

const parameters = {
  title: 'Component/Settings',
  component: Settings,
  decorators: [
    (Story) => (
      <div>
        <ThemeContext.Consumer>
          {(value) => {
            console.log(value);
            console.log('Logging ThemeContext', ThemeContext.Consumer);
            return (
              <Story
                darkMode={ThemeContext.Consumer.isDark}
                setDarkMode={ThemeContext.Consumer.setDarkMode}
              />
            );
          }}
        </ThemeContext.Consumer>
      </div>
    ),
  ],
  // decorators: [Story => <div><Story /></div>],
  argTypes: {
    dark: { control: 'boolean' },
  },
};

const Template = (args) => <Settings {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  locale: {
    t: (s) => {
      switch (s) {
        case 'menu.userPreferenceSection.theme.action':
          return 'Toggle ';
        case 'menu.userPreferenceSection.theme.light':
          return 'Light mode';
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

export default parameters;
