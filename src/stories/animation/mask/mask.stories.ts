import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './mask';
import { create } from './mask';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Animation/mask',
  render: (args) => {
    return create(args);
  },
  argTypes: {
    active: { control: 'boolean' },
    duration: { control: 'number' },
    delay: { control: 'number' },
    ease: { control: 'text' },
  },

} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
    active: true,
    duration: 1,
    delay: 0,
    ease: 'linear',
  },
};
