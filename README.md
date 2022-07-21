# Angular with AWS Cognito
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Prerequisites
- install angular-cli (`npm install -g @angular/cli`)

## Libraries used
- Bootstrap 4
- aws-amplify

## Run project
- Run command: ng serve
- Webpage will be accessible @ http://localhost:4200

## Host on S3
- Run command: ng build
- Upload to S3 bucket(manual): copy all files in /dist folder to s3 bucket 
- Upload to S3 bucket(aws command): `aws s3 cp dist/ s3://{{bucket_name}}/ --recursive`
