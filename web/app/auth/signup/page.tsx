import FilledButton from '@/components/button/filled-button'
import FormInput from '@/components/input/form-input'
import { signUp } from '@/lib/cognito'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import './page.scss'

async function postSignUp(form: FormData) {
	'use server'
	const email = form.get('email')?.toString()
	const password = form.get('password')?.toString()
	if (!email || !password) {
		console.error('bad empty email and password')
		return
	}
	return signUp(email, password).then((user) => {
		if(user?.userConfirmed){
			redirect('home')
		}else{
			redirect('auth/signup/confirm')
		}
	})
}

export default function SignUp() {
	return (
		<div className="signup surface-high is-medium">
			<h1 className="headline mb-10 is-text-center">SignUp</h1>
			<form className="signup--form" action={postSignUp}>
				<FormInput
					label="Name"
					name="name"
					type="text"
				></FormInput>
				<FormInput
					label="Email"
					name="email"
					type="email"
				></FormInput>
				<FormInput
					label="Password"
					name="password"
					type="password"
				></FormInput>
				<FilledButton label="SignUp with email" mode='accent' className='my-4'/>
			</form>
			<label className="label mt-8">
				Do you have account?
				<Link href={'/auth/login'} className='pl-1'>Login</Link>
			</label>
		</div>
	)
}
