import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './fade';
import { create } from './fade';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Animation/fade',
  render: (args) => {
    return create(args);
  },
  argTypes: {
    active: { control: 'boolean' },
    movementx: { control: 'number' },
    movementy: { control: 'number' },
    duration: { control: 'number' },
    delay: { control: 'number' },
    opacity: { control: 'number' },
    ease: { control: 'text' },
  },

} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
    active: true,
    movementx: 0,
    movementy: 0,
    duration: 0.5,
    delay: 0,
    opacity: 0,
    ease: 'linear',
  },
};
