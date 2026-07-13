/** @type {import('@storybook/nextjs-vite').StorybookConfig} */
const config = {
  stories: ['../ui/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-themes'
  ],
  framework: { name: '@storybook/nextjs-vite', options: {} },
  staticDirs: ['../public']
};

export default config;
