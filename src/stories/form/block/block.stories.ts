import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './block';
import { create } from './block';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Form/Block',
  render: (args) => {
    return create(args);
  },
  argTypes: {
    label: { control: 'text' },
    subText: { control: 'text' },
    field : {
      control: { type: 'select' },
      options: ['input', 'select', 'checkbox', 'radio', 'textarea'],
    },
    errorText: { control: 'text' },
    active: { control: 'boolean' },
    errorState: { control: 'boolean' },
  },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
    label: 'Label',
    subText: 'Subtext',
    field: 'input',
    errorText: 'Error text',
    active: true,
    errorState: false,
    flex: false,

  },
};

export const select: Story = {
  args: {
    label: 'Label',
    subText: 'Subtext',
    field: 'select',
    errorText: 'Error text',
    active: true,
    errorState: false,
    flex: false,
  },
};

export const checkbox: Story = {
  args: {
    label: 'Label',
    subText: 'Subtext',
    field: 'checkbox',
    errorText: 'Error text',
    active: true,
    errorState: false,
    flex: false,
  },
};

export const radio: Story = {
  args: {
    label: 'Label',
    subText: 'Subtext',
    field: 'radio',
    errorText: 'Error text',
    active: true,
    errorState: false,
    flex: false,
  },
};

export const textarea: Story = {
  args: {
    label: 'Label',
    subText: 'Subtext',
    field: 'textarea',
    errorText: 'Error text',
    active: true,
    errorState: false,
    flex: false,
  },
};
