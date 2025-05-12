import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './fixedcenter';
import { create } from './fixedcenter';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'javascript/交点監視',
  render: (args) => {
    return create(args);
  },
  argTypes: {
  },

} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
  },
};
