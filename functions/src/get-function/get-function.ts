import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

import dynamo from "../services/dynamodb";

export const lambdaHandler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const id = event?.pathParameters?.id;

  // url.com/submissions
  if (!id) {
    const { $response } = await dynamo
      .scan({ TableName: "submissions" })
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
  }

  // url.com/submissions/{id}
  const dynamoEvent: DynamoDB.DocumentClient.GetItemInput = {
    TableName: "submissions",
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
    body: JSON.stringify(data),
  };
};
