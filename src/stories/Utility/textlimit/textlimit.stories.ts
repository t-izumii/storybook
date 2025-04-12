import type { Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';

import type { Props } from './textlimit';
import { create } from './textlimit';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Utility/Textlimit',
  render: (args) => {
    return create(args);
  },
  argTypes: {
    text : { control: 'text' },
    limit : { control: 'number' },
  },

} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const base: Story = {
  args: {
    text : '文字数制限用のテキスト',
    limit : 1,
  },
};
