import { DynamoDB } from "aws-sdk";

import dynamo from "../dynamodb";
import { RouterController } from "../mini-router";
import { DYNAMODB_TABLE_NAME } from "../constants";

export const getAllSubmissions: RouterController = async () => {
  const { $response } = await dynamo
    .scan({ TableName: DYNAMODB_TABLE_NAME })
    .promise();
  const { error, data } = $response;

  if (error) {
    return {
      statusCode: Number(error.code),
      body: JSON.stringify({ message: error.message }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export const getOneSubmission: RouterController = async (event) => {
  const id = event?.pathParameters?.id;

  const dynamoEvent: DynamoDB.DocumentClient.GetItemInput = {
    TableName: DYNAMODB_TABLE_NAME,
    Key: { id },
  };

  const { $response } = await dynamo.get(dynamoEvent).promise();
  const { data, error } = $response;

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};
