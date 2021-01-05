import CountriesSearcher from "./CountriesSearcher";

export default {
  title: "Component/CountriesSearcher",
  component: CountriesSearcher,
};

const Template = args => <CountriesSearcher {...args} />;

export const Primary = Template.bind({});
