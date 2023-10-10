import * as cdk from 'aws-cdk-lib';
import { SubnetType, Vpc,IpAddresses, IVpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class VPCStack extends cdk.Stack {

  public readonly vpc: IVpc;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    

    const vpc = new Vpc(this,"MyVPC",{
      ipAddresses: IpAddresses.cidr("10.2.0.0/16"),
      subnetConfiguration:[{
        subnetType: SubnetType.PUBLIC,
        name: "PublicSubnetGroup",
        cidrMask: 24
      }]
    })

    this.vpc = vpc;
  }
}
