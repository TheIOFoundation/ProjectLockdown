import TimeSlider from './TimeSlider';

const __onSelectDate = (selectedDate, startDate, endDate) => {
  console.log('date selected');
  console.log(selectedDate);
  console.log(startDate);
  console.log(endDate);
};

const parameters = {
  title: 'Component/TimeSlider',
  component: TimeSlider,
  argTypes: {
    dark: { control: 'boolean' },
  },
};

const Template = (args) => <TimeSlider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onChange: __onSelectDate,
  i18n: { locale: 'en, en-US' },
};

export default parameters;
