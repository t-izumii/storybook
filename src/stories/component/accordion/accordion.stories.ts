import type { Meta, StoryObj } from '@storybook/html';

import type { Props } from './accordion';
import { create } from './accordion';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'コンポーネント/アコーディオン',
  render: (args) => {
    return create(args);
  },
  argTypes: {},
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
  },
};
