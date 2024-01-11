import type { Meta, StoryObj } from '@storybook/react'

import FilledButton from '@/components/button/filled-button'

const meta = {
	title: 'Components/Button',
	component: FilledButton,
	tags:['autodocs'],
	parameters:{
		layout: 'centered',
		pseudo:{
			hover: true
		}
	}
} satisfies Meta<typeof FilledButton>

export default meta

type Story = StoryObj<typeof meta>

export const Filled :Story = {
	args:{
		label: 'hello',
		mode: 'accent',
	}
}