import { APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

import miniRouter from "./mini-router";
import * as controllers from "./set-controllers";

export const lambdaHandler = async (
  gatewayEvent: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const router = miniRouter(gatewayEvent);

  router.route("/submissions", controllers.createSubmission);

  return router.execute();
};
