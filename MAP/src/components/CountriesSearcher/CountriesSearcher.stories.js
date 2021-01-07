import CountriesSearcher from './CountriesSearcher';

export default {
  title: 'Component/CountriesSearcher',
  component: CountriesSearcher,
  argTypes: {
    dark: { control: 'boolean' },
  },
};

const Template = args => {
  return <CountriesSearcher {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  i18n: { locale: 'en, en-US' },
};

export const Open = Template.bind({});
Open.args = {
  ...Primary.args,
  initialState: { showSearchInput: true },
};
