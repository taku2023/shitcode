import type { Meta, StoryObj } from '@storybook/react'

import Home from '@/home/page'

const meta = {
	title: 'Page/Home',
	component: Home,
	tags: ['autodocs'],
	parameters:{
		layout: 'fullscreen'
	}
} satisfies Meta<typeof Home>

export default meta

export const _Home: StoryObj<typeof meta> = {
	args: {
	}
}