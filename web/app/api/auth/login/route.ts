import { NextResponse } from 'next/server'

//node v20
export async function POST(){	
	return NextResponse.json({},
		{status:200}
	)
}

export async function GET(){
	return NextResponse.json(
		{session:'asdnoag'},
		{status: 200}
	)
}

