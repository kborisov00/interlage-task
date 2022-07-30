resource "aws_apigatewayv2_api" "apigateway" {
  name          = "apigateway"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["*"]
    allow_methods = ["POST", "GET"]
    allow_headers = ["content-type"]
    max_age= 300
  }
}

resource "aws_apigatewayv2_stage" "apigateway_stage" {
  api_id = aws_apigatewayv2_api.apigateway.id

  name        = "apigateway_stage"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "apigateway_integration" {
  for_each = {
    "get_func": aws_lambda_function.lambda_get_func,
    "set_func": aws_lambda_function.lambda_set_func,
  }

  api_id = aws_apigatewayv2_api.apigateway.id

  integration_uri    = each.value.invoke_arn
  integration_type   = "AWS_PROXY"
}