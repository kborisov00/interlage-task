import { APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

export type RouterController = (event: APIGatewayEvent) => Promise<APIGatewayProxyResult>;

const miniRouter = (event: APIGatewayEvent ) => {
  const routes: Record<string, RouterController> = {};

  const route = (path: string, controller: RouterController) => {
    routes[path] = controller;
  };

  const execute = () => routes[event.resource](event);

  return { route, execute };
}

export default miniRouter;