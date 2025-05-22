import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './ul';
import { create } from './ul';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'コンポーネント/リスト-UL',
  render: (args) => {
    return create(args);
  },
  argTypes: {
    length: { control: 'number' },
    childLength: { control: 'number' },
  },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
    length: 10,
    childLength: 0,
  },
};
