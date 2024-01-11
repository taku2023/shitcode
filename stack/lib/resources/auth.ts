import { AccountRecovery, UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito";
import { Construct } from "constructs";

export class AuthProvider extends Construct{

	constructor(scope:Construct,id:string){
		super(scope,id);

		const userPool = new UserPool(this,"MyUserPool",{
			selfSignUpEnabled: true,

			signInAliases:{email:true},
			accountRecovery: AccountRecovery.EMAIL_ONLY,
			deletionProtection: false,
		})

		const client  = new UserPoolClient(this,"MyUserPoolClient",{
			userPool,			
			authFlows:{
				userPassword: true,
			},		
		})
	}
}