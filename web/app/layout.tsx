import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'
import { createServerContext, ReactNode } from 'react'
import './import.scss'

const roboto = Roboto_Flex({
	subsets:['latin']
})

export const AuthContext = createServerContext<{ login: boolean }>(
	'AuthContext',
	{ login: false },
)


export const metadata: Metadata = {
	title: 'Shit Code',
	description: "Share your shit or you'll be grown.",
	applicationName: 'ShitCode',
}

export default async function RootLayout({
	children,
}: {
	children: ReactNode
}) {

	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	)
}
