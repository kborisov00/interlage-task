resource "aws_lambda_function" "lambda_get_func" {
  filename         = "./build/get-function/get-function.zip"
  function_name    = "Get-Function"
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.lambdaHandler"
  runtime          = "nodejs14.x"
  depends_on       = [aws_iam_role_policy_attachment.attach_iam_policy_to_iam_role]
}

resource "aws_apigatewayv2_route" "apigateway_routes_get_func" {
  for_each = toset(["GET /submissions", "GET /submissions/{id}"])

  api_id = aws_apigatewayv2_api.apigateway.id

  route_key = each.key
  target    = "integrations/${aws_apigatewayv2_integration.apigateway_integration["get_func"].id}"
}
