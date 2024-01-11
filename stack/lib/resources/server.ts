import { Construct } from "constructs";
import { IVpc, InstanceSize, SubnetType } from 'aws-cdk-lib/aws-ec2';
import { aws_ec2,aws_ecr,aws_ecs} from "aws-cdk-lib";
import { Operation } from "aws-cdk-lib/aws-dynamodb";
import { OperatingSystemFamily } from "aws-cdk-lib/aws-ecs";


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

export class WebServer extends Construct{
	constructor(scope: Construct,id:string){
		super(scope,id)

		new aws_ecr.Repository(this,"NextImageRepo",{
			
		})

		const taskDef = new aws_ecs.FargateTaskDefinition(this,"WebServerTask",{
			runtimePlatform: {
				operatingSystemFamily:OperatingSystemFamily.LINUX,
			},
			
		})
		taskDef.addContainer("",{
				image: aws_ecs.ContainerImage.fromRegistry("node:18"),
				entryPoint:[
					"sh", "-c"
				],
		})
		

		
	}
}