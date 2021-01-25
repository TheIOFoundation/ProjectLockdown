import CountriesSearcher from './CountriesSearcher';

const parameters = {
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
  map: {
    flyTo: function () {
      console.log(...arguments);
    },
  },
};

export const Open = Template.bind({});
Open.args = {
  ...Primary.args,
  initialState: { showSearchInput: true },
};

export default parameters;
