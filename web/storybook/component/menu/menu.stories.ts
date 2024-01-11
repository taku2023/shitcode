import Menu from '@/components/menu/menu-list'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Menu',
	component: Menu,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const _Menu :Story = {
	args:{
		menus:[
			{href: '#', title: 'Home',icon:'home'},
		],
		label: 'Activities'
	}
}