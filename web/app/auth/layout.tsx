import React from 'react'
import './layout.scss'

export default function RootLayout({
	children,
}:{
	children: React.ReactNode
}){
	return (
		<div className="auth background--invert">
			<div className="auth-aside">
				<h1 className="headline">ShitCode</h1>
				<p className="title--invert">We can learn from everything</p>
			</div>
			{children}
		</div>
	)
}