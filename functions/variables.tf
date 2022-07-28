variable "aws_region" {
  description = "Location of the data centers that will be used"
  default = "eu-central-1"
  type = string
}

variable "db_table_name" {
  description = "The name of the dynamodb table"
  default = "submissions"
  type = string
}

variable "aws_account_id" {
  description = "Aws account identificator"
  default = "734471709696"
  type = string
}