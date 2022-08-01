# Interlage Task

## How to run the project

Setup Credentials:

1. Go to `back-end` folder
2. Open `variables.tf`
3. Change `aws_accound_id` to your aws account id
4. Go to `aws-credentials.example`
5. Rename the file to `aws-credentials`
6. Apply your aws credentials to the file

Run the Project

1. Go to `back-end` folder
2. Install node modules
3. Run `yarn build`
4. Run `terraform init`
5. Run `terraform apply`
6. When Terraform is done, from the outputs, copy `API_URL` variable
7. Go to `front-end` folder
8. Install node modules
9. Go to `.env.example`
10. Rename the file to `.env`
11. Apply the `API_URL` link you copied from the Terraform outputs to `REACT_APP_API_URL` variable
12. Run `yarn start`

## Important

When you run `terraform apply`, rarely you might get the following error:
`error creating API Gateway v2 route: ConflictException: Unable to complete operation due to concurrent modification. Please try again later`

This is a known bug as it's described here: https://github.com/hashicorp/terraform-provider-aws/issues/18018

The solution to the problem is to run `terraform apply` again until it runs smoothly (usually 1 try is all you need).


## Testing

Front End: `yarn test`