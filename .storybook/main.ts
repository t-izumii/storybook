import type { StorybookConfig } from '@storybook/html-vite';
import path from 'path';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    '@storybook/addon-docs',
  ],
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  viteFinal: async (config) => {
    // aliasの設定
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    
    return config;
  },
};

export default config;