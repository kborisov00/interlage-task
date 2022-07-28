import { DynamoDB } from "aws-sdk";

const dynamo = new DynamoDB.DocumentClient();

export default dynamo;