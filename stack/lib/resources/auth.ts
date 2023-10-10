import { UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito";
import { Construct } from "constructs";

export class AuthProvider extends Construct{

	constructor(scope:Construct,id:string){
		super(scope,id);

		const userPool = new UserPool(this,"UserPool",{
			
		})

		const client  = new UserPoolClient(this,"UserPoolClient",{
			userPool,		
		})
		
	}
}