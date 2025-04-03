import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './modal';
import { create } from './modal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/Modal',
  tags: ['autodocs'],
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
