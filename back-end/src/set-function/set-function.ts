import { APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

import miniRouter from "../mini-router";
import * as controller from "./set-function.controller";

export const lambdaHandler = async (
  gatewayEvent: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const router = miniRouter(gatewayEvent);

  router.route("/submissions", controller.createSubmission);

  return router.execute();
};
