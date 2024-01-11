import type { Meta, StoryObj } from '@storybook/react'


import TextButton from '@/components/button/text-button'

const meta = {
	title: 'Components/Button',
	component: TextButton,
	tags:['autodocs'],
	parameters:{
		layout: 'centered',
	}
} satisfies Meta<typeof TextButton>

export default meta

export const Text: StoryObj<typeof meta> = {
	args:{
		label: 'Action',
		icon: 'search'
	}
}