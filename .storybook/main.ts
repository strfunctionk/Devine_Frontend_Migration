import path from 'node:path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    // 기존 SVG asset 처리 rule에서 .svg 제외
    config.module = config.module ?? { rules: [] };
    config.module.rules = (config.module.rules ?? []).map((rule) => {
      if (
        typeof rule === 'object' &&
        rule !== null &&
        rule.test instanceof RegExp &&
        rule.test.test('.svg')
      ) {
        return { ...rule, exclude: /\.svg$/ };
      }
      return rule;
    });

    // SVGR로 .svg → React 컴포넌트 (SVG 자체 width/height 제거해 CSS로 제어 가능하게)
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [{ name: 'removeDimensions' }],
            },
          },
        },
      ],
    });

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@assets': path.resolve(__dirname, '../src/assets'),
      },
    };
    return config;
  },
};
export default config;
