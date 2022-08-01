import { DynamoDB } from "aws-sdk";
import { randomUUID } from "crypto";

import dynamo from "../dynamodb";
import { RouterController } from "../mini-router";
import { validateSubmission } from "../validation";
import { DYNAMODB_TABLE_NAME } from "../constants";

export const createSubmission: RouterController = async (event) => {
  const { errors, body } = await validateSubmission(event.body);

  if (errors.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: errors }),
    };
  }

  const submissionId = randomUUID();

  const dynamoEvent: DynamoDB.DocumentClient.PutItemInput = {
    TableName: DYNAMODB_TABLE_NAME,
    Item: {
      ...body,
      id: submissionId,
    },
  };

  const { $response } = await dynamo.put(dynamoEvent).promise();
  const { error } = $response;

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ ...body, id: submissionId }),
  };
};
