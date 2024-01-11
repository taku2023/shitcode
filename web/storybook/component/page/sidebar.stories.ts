import type { Meta, StoryObj } from '@storybook/react'


import Sidebar from '@/components/sidebar'

const meta = {
	title: 'Page/Sidebar',
	component: Sidebar,
	tags:['autodocs'],
	parameters:{
		layout: 'fullscreen'
	}
} satisfies Meta<typeof Sidebar>

export default meta

export const _SideBar: StoryObj<typeof meta> = {
	args:{
		user:{
			name: 'John Doe',
			avatar: 'https://i.pravatar.cc/300',
			description:'C++ developer for 5 years.',
			action:{
				shits: 5,
				replies: 0,
				forked:0
			}
		}
	}
}