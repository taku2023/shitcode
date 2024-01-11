import { AttributeType, Table } from "aws-cdk-lib/aws-dynamodb"
import { Construct } from "constructs"

export class Database extends Construct{
  constructor(scope:Construct,id:string){
    super(scope,id)

    const table = new Table(this,"table",{
      partitionKey:{
        name: "PK",
        type: AttributeType.STRING,
      },
      sortKey:{
        name: "SK",
        type: AttributeType.STRING
      }
    })  
  }
}