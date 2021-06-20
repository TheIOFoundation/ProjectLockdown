import { Expandable } from './Expandable';

const parameters = {
  title: 'Component/Expandable',
  component: Expandable,
};

const Template = (args) => <Expandable {...args} />;

let currentDropdown = 1;
export const Primary = Template.bind({});
Primary.args = {
  toggle: 'About',
  detail: (
    <p>
      Lockdown, quarantine, and isolation measures have been implemented across
      the globe to reduce the spread of COVID-19 and reduce the strain on
      medical infrastructure. <b>Project Lockdown</b> empowers citizens,
      journalists, and human rights actors to easily analyze the social and
      political effects of these measures. Founded on the values of transparency
      and accountability, <b>Project Lockdown</b> is committed to providing
      citizens of the world with the tools they need to stay safe and informed.
    </p>
  ),
  currentDropdown,
  onDropDown: (id) => (currentDropdown = id),
};

export default parameters;
