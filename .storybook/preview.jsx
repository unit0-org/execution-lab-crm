import { Montserrat, JetBrains_Mono } from 'next/font/google';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../app/globals.css';

// Mirrors app/layout.js: the font variables must land on :root, because
// globals.css resolves --font-sans/--font-mono against them there.
const sans = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});
const mono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin']
});

document.documentElement.classList.add(sans.variable, mono.variable);

/** @type {import('@storybook/nextjs-vite').Preview} */
const preview = {
  decorators: [
    // The app themes off data-theme on :root (see app/themeScript.js);
    // the toolbar toggle drives the same attribute.
    withThemeByDataAttribute({
      themes: { light: 'light', dark: 'dark' },
      defaultTheme: 'light',
      attributeName: 'data-theme'
    })
  ],
  parameters: {
    layout: 'centered',
    // The theme toggle owns the canvas background (--color-bg-canvas),
    // so the backgrounds addon would only fight it.
    backgrounds: { disable: true },
    controls: { matchers: { color: /(background|color)$/i } },
    a11y: { test: 'todo' }
  }
};

export default preview;
