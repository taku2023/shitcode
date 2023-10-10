import { Construct } from "constructs";
import { IVpc, InstanceSize, SubnetType } from 'aws-cdk-lib/aws-ec2';
import { aws_ec2 } from "aws-cdk-lib";


interface Props{
	vpc:IVpc
}

export class Server extends Construct{

	public readonly ec2: aws_ec2.Instance

	constructor(scope: Construct,id:string,{vpc}:Props){
		super(scope,id)

		const ec2 = new aws_ec2.Instance(scope,"EC2Instance",{
			ssmSessionPermissions: true,
			vpc,
			vpcSubnets:{
				subnetType: SubnetType.PUBLIC
			},
			instanceType: aws_ec2.InstanceType.of(aws_ec2.InstanceClass.T3,InstanceSize.MICRO),
			machineImage: aws_ec2.MachineImage.latestAmazonLinux2023()
		})

		this.ec2 = ec2;
	}
}