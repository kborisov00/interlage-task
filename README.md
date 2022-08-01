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
2. Run `yarn build`
3. Run `terraform init`
4. Run `terraform apply`
5. When Terraform is done, from the outputs, copy `API_URL` variable
6. Go to `front-end` folder
7. Go to `.env.example`
8. Rename the file to `.env`
9. Apply the `API_URL` link you copied from the Terraform outputs to `REACT_APP_API_URL` variable
10. Run `yarn start`