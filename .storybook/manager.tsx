import React, { useState } from 'react';
import { addons, types } from 'storybook/manager-api';
import { IconButton } from 'storybook/internal/components';
import { THEME_EVENT, type ThemeMode } from './theme-constants';

const ADDON_ID = 'devine/theme-switcher';
const TOOL_ID = `${ADDON_ID}/tool`;

function ThemeSwitcherTool() {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  const toggle = () => {
    const next: ThemeMode = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    addons.getChannel().emit(THEME_EVENT, { theme: next });
  };

  return (
    <IconButton onClick={toggle} title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </IconButton>
  );
}

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Theme Switcher',
    render: () => <ThemeSwitcherTool />,
  });
});
