import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './input-text';
import { create } from './input-text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Form/Input-text',
  render: (args) => {
    return create(args);
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'max'],
    },
    active: { control: 'boolean' },
    errorState: { control: 'boolean' },
  },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
    size: 'medium',
    active: true,
    label: '',
    errorState: false,
    placeholder: 'Placeholder',
  },
};
