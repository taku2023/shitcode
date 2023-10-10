import dayjs from 'dayjs'
import { NextResponse } from 'next/server'

export async function GET(request:Request){
	const params = new URLSearchParams(request.url)
    
	return NextResponse.json([
		{
			title: 'Fix this shitty code my boss has written',
			description: 'Someone plz fix this code. I read many times and acutually don’t figure out what the hell going to do.',
			tags:['bug','hucky'], 
			author: {
				name: 'tmori'
			},
			postAt: dayjs().format('YY/MM/DD HH:mm'),
			files:[
				{language: 'Typescript',data: ''}
			]
		}
	],{
		status:200
	})
}
