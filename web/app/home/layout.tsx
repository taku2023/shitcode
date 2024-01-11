import { ReactNode } from 'react'
import 'server-only'
import './layout.scss'
import SearchBar from '@/components/input/search-bar'
/**
 * Layout with Header
 */
export default function RootLayout({ children }: { children: ReactNode }) {

	
	
	return (
		<div className='home surface is-large'>
			<SearchBar></SearchBar>
			{children}
		</div>
	)
}
