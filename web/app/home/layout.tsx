import { AuthContext } from '@/app/layout'
import Link from 'next/link'
import { ReactNode, useContext } from 'react'
import 'server-only'
import './layout.scss'

/**
 * Layout with Header
 */
export default function RootLayout({
	children,
}:{
	children: ReactNode
}){
	
	const {login} = useContext(AuthContext)


	return (
		<>
			<header className="home-header background--invert">
				<span className="material-symbols-outlined is-clickable">search</span>
				<p className="title--invert">Shit Cod</p>
				{
					login ? <span className="material-symbols-outlined is-clickable">face</span>: 
						<span className="body--invert is-clickable">
							<Link href={'/auth/login'}>Login</Link>
						</span>
				}
			</header>
			{children}
		</>
	)
}