import {
	CognitoUserPool,
	ISignUpResult,
	CognitoUser,
	AuthenticationDetails,
} from 'amazon-cognito-identity-js'

const userPool = new CognitoUserPool({
	UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
	ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!,
})

const currentUser = () => {
	return userPool.getCurrentUser()
}

const user = (email: string) =>
	new CognitoUser({
		Pool: userPool,
		Username: email,
	})

const signUp = async (email: string, password: string) => {
	return new Promise<ISignUpResult | undefined>((resolve, reject) => {
		userPool.signUp(email, password, [], [], (err, result) => {
			if (err) {
				reject(err)
			} else {
				resolve(result)
			}
		})
	})
}

const login = async (email: string, password: string) => {
	return new Promise<void>((resolve, reject) => {
		user(email).authenticateUser(
			new AuthenticationDetails({
				Username: email,
				Password: password,
			}),
			{
				onSuccess: (session) => {
					if (!session.isValid()) {
						reject('unresolve')
					} else {
						resolve()
					}
				},
				onFailure: (err) => {
					reject(JSON.stringify(err))
				},
			},
		)
	})
}

export { login, signUp, currentUser }
