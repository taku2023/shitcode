import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Server } from './resources/server';
import { IVpc } from 'aws-cdk-lib/aws-ec2';

interface Props extends cdk.StackProps{
	vpc: IVpc
}

export class ServerStack extends cdk.Stack{

	constructor(scope: Construct, id: string, props: Props) {
		super(scope, id,props);

		//server
		const {ec2} = new Server(this,"MyEC2Instance",props)

		//api gateway

		//cognito

		//
	}
}