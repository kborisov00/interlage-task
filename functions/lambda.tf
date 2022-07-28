data "archive_file" "zip_get_func" {
  for_each = toset(["get-function", "set-function"])
  type        = "zip"
  source_file  = "./build/${each.key}/index.js"
  output_path = "./build/${each.key}/${each.key}.zip"
}

resource "aws_lambda_permission" "api_gw_lambda_permission" {
  for_each = {
    "get_func": aws_lambda_function.lambda_get_func,
    "set_func": aws_lambda_function.lambda_set_func,
  }

  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = each.value.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.apigateway.execution_arn}/*/*"
}