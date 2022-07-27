data "archive_file" "zip_set_func" {
  type        = "zip"
  source_file  = "./build/set-function/index.js"
  output_path = "./build/set-function/set-function.zip"
}

resource "aws_lambda_function" "lambda_set_func" {
  filename         = "./build/set-function/set-function.zip"
  function_name    = "Set-Function"
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.lambdaHandler"
  runtime          = "nodejs14.x"
  depends_on       = [aws_iam_role_policy_attachment.attach_iam_policy_to_iam_role]
}

resource "aws_apigatewayv2_api" "apigateway_set_func" {
  name          = "apigateway_set_func"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "apigateway_stage_set_func" {
  api_id = aws_apigatewayv2_api.apigateway_set_func.id

  name        = "apigateway_stage_set_func"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "apigateway_integration_set_func" {
  api_id = aws_apigatewayv2_api.apigateway_set_func.id

  integration_uri    = aws_lambda_function.lambda_set_func.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "apigateway_route_set_func" {
  api_id = aws_apigatewayv2_api.apigateway_set_func.id

  route_key = "POST /"
  target    = "integrations/${aws_apigatewayv2_integration.apigateway_integration_set_func.id}"
}

resource "aws_lambda_permission" "api_gw_set_func" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_set_func.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.apigateway_set_func.execution_arn}/*/*"
}
