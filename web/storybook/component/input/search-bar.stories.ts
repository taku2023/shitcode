import SearchBar from '@/components/input/search-bar'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Input',
	component: SearchBar,
	parameters:{
		layout: 'centered',
		pseudo:{
			hover: true
		}
	}
} satisfies Meta<typeof SearchBar>

export default meta

type Story = StoryObj<typeof meta>

export const _SearchBar:Story = {
	args:{
		menuIsOpened:false,
		placeholder:'Search',
		notifications: 0
	}
}