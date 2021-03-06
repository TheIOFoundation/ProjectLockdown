import PlayButton from './PlayButton';

const parameters = {
  title: 'Component/PlayButton',
  component: PlayButton,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = args => <PlayButton />;

export const Primary = Template.bind({});

Primary.args = {
  // Shaping the stories through args composition.
  // The data was inherited the Default story in task.stories.js.
};

export default parameters;
