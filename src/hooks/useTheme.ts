"use client";

import { useTheme as useNextTheme } from "next-themes";
import { THEME, type Theme } from "@/constants/theme";
import { withoutTransition } from "@/lib/withoutTransition";

const isValidTheme = (v: string | undefined): v is Theme =>
  v === THEME.DARK || v === THEME.LIGHT;

const useTheme = () => {
  const { resolvedTheme, setTheme } = useNextTheme();
  const theme: Theme = isValidTheme(resolvedTheme) ? resolvedTheme : THEME.DARK;
  const toggleTheme = () =>
    withoutTransition(() => setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK));

  return { theme, toggleTheme };
};

export default useTheme;
