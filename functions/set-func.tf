resource "aws_lambda_function" "lambda_set_func" {
  filename         = "./build/set-function/set-function.zip"
  function_name    = "Set-Function"
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.lambdaHandler"
  runtime          = "nodejs14.x"
  depends_on       = [aws_iam_role_policy_attachment.attach_iam_policy_to_iam_role]
}

resource "aws_apigatewayv2_route" "apigateway_routes_set_func" {
  api_id = aws_apigatewayv2_api.apigateway.id

  route_key = "POST /submissions"
  target    = "integrations/${aws_apigatewayv2_integration.apigateway_integration["set_func"].id}"
}
