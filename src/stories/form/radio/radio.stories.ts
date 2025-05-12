import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './radio';
import { create } from './radio';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'フォーム/ラジオボタン',
  render: (args) => {
    return create(args);
  },
  argTypes: {
    active: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
    active: true,
    label: 'Radio',
  },
};
