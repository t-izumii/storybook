import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './grid';
import { create } from './grid';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Layout/Grid',
  tags: ['autodocs'],
  render: (args) => {
    return create(args);
  },
  argTypes: {
    column: { control: 'number' },
    gap: { control: 'number' },
  },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
    column: 2,
    gap: 24,
  },
};
