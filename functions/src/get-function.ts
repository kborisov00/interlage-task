import { APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

import miniRouter from "./mini-router";
import * as controllers from "./get-controllers";

export const lambdaHandler = async (
  gatewayEvent: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const router = miniRouter(gatewayEvent);

  router.route("/submissions", controllers.getAllSubmissions);
  router.route("/submissions/{id}", controllers.getOneSubmission);

  return router.execute();
};
