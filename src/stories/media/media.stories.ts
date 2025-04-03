import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './media';
import { create } from './media';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Layout/Media',
  tags: ['autodocs'],
  render: (args) => {
    return create(args);
  },
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    button: { control: 'text' },
    reverse: { control: 'boolean' },
  },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    button: 'Button',
    reverse: false,
  },
};
