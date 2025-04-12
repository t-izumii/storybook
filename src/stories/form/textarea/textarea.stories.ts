import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './textarea';
import { create } from './textarea';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Form/Textarea',
  render: (args) => {
    return create(args);
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    active: { control: 'boolean' },
    errorState: { control: 'boolean' },
  },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
    active: true,
    label: '',
    errorState: false,
    placeholder: 'Placeholder',
  },
};
