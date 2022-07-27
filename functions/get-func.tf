data "archive_file" "zip_get_func" {
  type        = "zip"
  source_file  = "./build/get-function/index.js"
  output_path = "./build/get-function/get-function.zip"
}

resource "aws_lambda_function" "lambda_get_func" {
  filename         = "./build/get-function/get-function.zip"
  function_name    = "Get-Function"
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.lambdaHandler"
  runtime          = "nodejs14.x"
  depends_on       = [aws_iam_role_policy_attachment.attach_iam_policy_to_iam_role]
}