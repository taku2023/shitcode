import React from 'react'
import './layout.scss'

export default function RootLayout({
	children,
}:{
	children: React.ReactNode
}){
	return (
		<div className="auth surface-high">
			<div className="auth--aside">
				<h1 className="headline">ShitCode</h1>
				<p className="title">We can learn from everything</p>
			</div>
			<div className="auth--container">
				{children}
			</div>
		</div>
	)
}