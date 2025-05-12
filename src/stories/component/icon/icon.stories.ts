import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { IconProps } from './icon';
import { createIcon } from './icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'コンポーネント/アイコン',
  render: (args) => {
    return createIcon(args);
  },
  argTypes: {
    name: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<IconProps>;

export default meta;
type Story = StoryObj<IconProps>;

export const base: Story = {
  args: {
    name: '',
    size: 'medium',
  },
};
