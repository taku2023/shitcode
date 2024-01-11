import type { Meta, StoryObj } from '@storybook/react'

import Question from '@/components/card/question'

const meta = {
	title: 'Components/Card',
	component: Question,
	tags:['autodocs'],
	parameters:{
		layout: 'centered',
	}
} satisfies Meta<typeof Question>

export default meta

export const _Question: StoryObj<typeof meta> = {
	args:{
		user: {
			name: 'Taku',
			href: '#',
		},
		postedAt: '2023-10-10',
		content: "You known, I'm a big fan of you.",
		language: 'typescript',
		title: "What's the shame of this code base?",
		tags: [
			{label: 'typescript', href: '#'},
			{label: 'react', href: '#'},
			{label: 'storybook', href: '#'},
		],
		files: 3,
		replies: []
	}
}