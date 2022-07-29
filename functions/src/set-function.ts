import { DynamoDB } from "aws-sdk";
import { randomUUID } from "crypto";
import { APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

import dynamo from "./dynamodb";
import { DYNAMODB_TABLE_NAME } from "./constants";

export const lambdaHandler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const dynamoEvent: DynamoDB.DocumentClient.PutItemInput = {
    TableName: DYNAMODB_TABLE_NAME,
    Item: {
      id: randomUUID(),
      ...JSON.parse(event.body || "{}"),
    },
  };

  const { $response } = await dynamo.put(dynamoEvent).promise();
  const { data, error } = $response;

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};