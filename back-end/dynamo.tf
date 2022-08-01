resource "aws_dynamodb_table" "submissions" {
 name = var.db_table_name
 billing_mode = "PROVISIONED"
 read_capacity= "5"
 write_capacity= "5"

 attribute {
  name = "id"
  type = "S"
 }

 hash_key = "id"
}