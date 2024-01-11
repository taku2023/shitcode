import type { Meta, StoryObj } from '@storybook/react'

import SignUp from '@/auth/signup/page'

const meta = {
	title: 'Page/SignUp',
	component: SignUp,
	tags: ['autodocs'],
	parameters:{
		layout: 'fullscreen'
	}
} satisfies Meta<typeof SignUp>

export default meta

export const _SignUp: StoryObj<typeof meta> = {
	args: {
	}
}