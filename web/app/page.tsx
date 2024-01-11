import SearchBar from '@/components/input/search-bar'
import './page.scss'
import Question from '@/components/card/question'
import client from '@/lib/http'



export default async function Page(){

	const {data,status} = await client.get<any[]>('questions')
	if(status===200){
		data
	}
	//const response = await fetch(process.env.API_BASE_URL+'/questions').then(res=>res.json())
	
	const props = {
		menuIsOpened:false,
		notifications: 0,
		placeholder: ''
	}	



	return (<>
		<main className="surface app">
			<SearchBar {...props}/>
			<p className="label mt-4">Latest</p>
			<div className="app__cardlist">
				{response.map(data=>{
					<>
						<Question {...data}></Question>
					</>
				})}
			</div>
		</main>
	</>)
}