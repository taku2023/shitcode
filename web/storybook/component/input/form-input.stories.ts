import type { Meta, StoryObj } from '@storybook/react'

import FormInput from '@/components/input/form-input'

const meta = {
	title: 'Components/FormInput',
	component: FormInput,
	tags:['autodocs'],
	parameters:{
		layout: 'centered',
	}
} satisfies Meta<typeof FormInput>

export default meta

export const _FormInput: StoryObj<typeof meta> = {
	args:{
		label: 'Name',
		placeholder: 'Input your name here',
		type: 'text',
		name: 'name'
	}
}