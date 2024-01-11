import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: [
		'../storybook/**/*.stories.@(js|jsx|ts|tsx)'		
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'storybook-addon-pseudo-states',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config, options) =>{
		config.resolve = config.resolve || {};
		config.resolve.alias = config.resolve.alias || {};
		config.resolve.alias['@'] = require('path').resolve(__dirname, '../app');
		return config;
	}
}
export default config
