import FormInput from '@/app/components/input/formInput'
import { AuthContext } from '@/app/layout'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useContext } from 'react'
import './page.scss'


async function postLogin(form:FormData){
	'use server'
	const data = await fetch('http://localhost:3000/api/auth/login',{
		method: 'POST',
		body: JSON.stringify({
			email: form.get('email'),
			password: form.get('password')
		})
	})
	const json = await data.json()
	redirect('/home')
}

export default function Login(){
	const {login} = useContext(AuthContext)
	if (login){
		redirect('/home')
	}
	
	return (
		<div className="login">
			<h1 className="headline-2--invert login-title">Login</h1>
			<form className="login-form" action={postLogin}>
				<FormInput id="email" label="Email" name="email" placeholder="shitcode@gmail.com" type="email" ></FormInput>
				<FormInput id="password" label="Password" name="password" placeholder="******" type="password" ></FormInput>
				<label className="login-form-label label--invert">
					<Link href={'/auth/signup'}>Don&apos;t you have account?</Link>
				</label>
				<button className="button login-form-button is-clickable" type="submit">
					Login
				</button>
			</form>
			<label className="label--invert login-twitter">
				<Link href={'/'}>Or login with X (Former Twitter)</Link>
			</label>
		</div>
	)
}