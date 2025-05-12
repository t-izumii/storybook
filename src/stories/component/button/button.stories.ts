import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { ButtonProps } from './Button';
import { createButton } from './Button';

const meta = {
  title: 'コンポーネント/ボタン',
  render: (args) => {
    return createButton(args);
  },
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    mode: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    active: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const base: Story = {
  args: {
    mode: '',
    size: 'medium',
    active: true,
    label: 'Button',
  },
};
