//axios http client base setting
import axios from 'axios'

const client = axios.create({
	baseURL: process.env.API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export default client

