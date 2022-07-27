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