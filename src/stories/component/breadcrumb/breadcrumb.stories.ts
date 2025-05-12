import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './breadcrumb';
import { create } from './breadcrumb';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'コンポーネント/パンくずリスト',
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
