import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { createServerContext, ReactNode } from 'react'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })
export const AuthContext = createServerContext<{login:boolean}>('AuthContext',{login:false})

export const metadata: Metadata = {
	title: 'Shit Code',
	description: 'Share your shit or you\'ll be grown.',
	applicationName: 'ShitCode'
}


const getUser:()=>Promise<{session?:string}> = async ()=>{
	const data = await fetch('http://localhost:3000/api/auth/login',{method: 'GET'}).then(response=>response.json())
	console.log(data)
	return data
}

export default async function RootLayout({
	children
}: {
  children: ReactNode
}) {

	const {session} = await getUser()  
  
	return (
		<html lang="en">
			<AuthContext.Provider value={{login:!!session}}>
				<body className={inter.className}>{children}</body>        
			</AuthContext.Provider>
		</html>
	)
}
