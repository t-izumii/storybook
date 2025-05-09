import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './flex';
import { create } from './flex';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Layout/Flex',
  render: (args) => {
    return create(args);
  },
  argTypes: {
    content: { control: 'number' },
    column: { control: 'number' },
    columnTablet: { control: 'number' },
    columnSp: { control: 'number' },
    gap: { control: 'number' },
    gapTablet: { control: 'number' },
    gapSp: { control: 'number' },
  },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
    content: 2,
    column: 2,
    columnTablet: 1,
    columnSp: 1,
    gap: 24,
    gapTablet: 16,
    gapSp: 16,
  },
};
