import { DynamoDB } from "aws-sdk";
import { randomUUID } from "crypto";
import { APIGatewayProxyResult } from "aws-lambda";
import { PutItemInputAttributeMap } from "aws-sdk/clients/dynamodb";

import dynamo from "../services/dynamodb";

export const lambdaHandler = async (
  event: PutItemInputAttributeMap
): Promise<APIGatewayProxyResult> => {
  const dynamoEvent: DynamoDB.DocumentClient.PutItemInput = {
    TableName: "submissions",
    Item: {
      id: randomUUID(),
      ...event.body,
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
