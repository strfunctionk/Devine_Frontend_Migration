import type { Preview } from '@storybook/nextjs';
import { addons } from 'storybook/preview-api';
import { THEME_EVENT, type ThemeMode } from './theme-constants';
import '../src/styles/globals.css';

addons.getChannel().on(THEME_EVENT, ({ theme }: { theme: ThemeMode }) => {
  const { documentElement } = document;
  documentElement.classList.add('no-transition');
  documentElement.setAttribute('data-theme', theme);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      documentElement.classList.remove('no-transition');
    });
  });
});

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
