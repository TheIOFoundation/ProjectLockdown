import LanguageSelector from './LanguageSelector';

export default {
  title: 'Component/LanguageSelector',
  component: LanguageSelector,
  argTypes: {
    dark: { control: 'boolean' },
  },
};

const Template = (args) => <LanguageSelector {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dark: true,
};
