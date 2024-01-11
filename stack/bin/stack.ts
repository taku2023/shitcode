#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { ServerStack } from '../lib/server-stack';
import { VPCStack } from '../lib/vpc-stack';

const app = new cdk.App();

const stage = new cdk.Stage(app,"dev")

const {vpc} = new VPCStack(stage, 'VPCStack', {  
});
new ServerStack(stage,"ServerStack",{
  vpc
})