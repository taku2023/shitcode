import FilledButton from '@/components/button/filled-button'
import FormInput from '@/components/input/form-input'
import { login } from '@/lib/cognito'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import './page.scss'

const postLogin = async (form: FormData) => {
	'use server'
	const email = form.get('email')?.toString()
	const password = form.get('password')?.toString()
	
	if (!email || !password) {
		console.error('email and password are not null')
		return
	}
	return login(email, password).then((_) => {
		redirect('home')
	})
}

export default function Login() {
	return (
		<div className='login surface-high is-medium'>
			<h1 className="headline mb-10 is-text-center">Login</h1>
			<form className="login--form" action={postLogin}>
				<FormInput
					label="Email"
					name="email"
					placeholder="shitcode@gmail.com"
					type="email"
				></FormInput>
				<FormInput
					label="Password"
					name="password"
					placeholder="******"
					type="password"
				></FormInput>
				<Link href={'/auth/login'} className='label login--form--forget'>Forget password?</Link>
				<FilledButton label="Login with email" mode='accent' className='my-8'/>
			</form>			
			<label className="label mt-8">
				Don&apos;t you have account?
				<Link href={'/auth/signup'} className='pl-1'>Sign up</Link>
			</label>
		</div>
	)
}
