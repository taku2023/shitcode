#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { VPCStack } from '../lib/vpc-stack';
import { ServerStack } from '../lib/server-stack';

const app = new cdk.App();

const {vpc} = new VPCStack(app, 'App1/VPCStack', {  
});

new ServerStack(app,"App1/ServerStack",{
  vpc
})