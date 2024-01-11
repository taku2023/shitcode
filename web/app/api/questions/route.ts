import { NextResponse } from 'next/server'

type Response = {
  title: string,
  content: string,
}

export async function GET(request:Request){
  

	return NextResponse.json([
		{
			title: 'Fix this shitty code my boss has written',
			content: 'Someone plz fix this code. I read many times and acutually don’t figure out what the hell going to do.',
			files: 3,
			language: 'Typescript',
			user:{
				name: 'tmori',
				href: '/user/tmori',
			},
			tags:[
				{label: 'bug', href: '/tags/bug'},
				{label:'hucky', href: '/tags/hucky'},
			],
			replies: []
		}],{
		status:200,
	})
}