import type { Preview } from '@storybook/nextjs';
import { useEffect } from 'react';
import { addons } from 'storybook/preview-api';
import { ThemeProvider, useTheme } from 'next-themes';
import { withoutTransition } from '../src/lib/withoutTransition';
import { THEME_EVENT, type ThemeMode } from './theme-constants';
import '../src/styles/globals.css';

const ThemeSync = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const handler = ({ theme }: { theme: ThemeMode }) =>
      withoutTransition(() => setTheme(theme));
    const channel = addons.getChannel();
    channel.on(THEME_EVENT, handler);
    return () => channel.off(THEME_EVENT, handler);
  }, [setTheme]);

  return null;
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute="data-theme" defaultTheme="dark">
        <ThemeSync />
        <Story />
      </ThemeProvider>
    ),
  ],
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
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: { width: "389px", height: "844px" },
        },
        tablet: {
          name: "Tablet",
          styles: { width: "744px", height: "1024px" },
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1280px", height: "800px" },
        },
      },
      defaultViewport: "desktop",
    },
  },
};

export default preview;
