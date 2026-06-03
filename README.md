# Serverless Job Application Portal

## Project Overview

This project is a Serverless Job Application Portal built using AWS services and hosted through Nginx on a Linux VPS. Users can view job details and submit job applications through a web form. Application data is processed by AWS Lambda and stored in Amazon DynamoDB without using a traditional backend server.

## Architecture

```text
User
↓
Nginx (Linux VPS)
↓
Frontend (HTML, CSS, JavaScript)
↓
Amazon API Gateway
↓
AWS Lambda
↓
Amazon DynamoDB
```

## AWS Services Used

* AWS Lambda
* Amazon API Gateway
* Amazon DynamoDB
* Amazon CloudWatch

## Infrastructure Used

* Linux VPS (Lightsail)
* Nginx Web Server

## Features

### Job Details Section

Displays:

* Job Title
* Company Name
* Location
* Experience Required
* Skills Required
* Job Description

### Application Form

Users can submit:

* Full Name
* Email Address
* Phone Number
* Qualification
* Years of Experience
* Skills
* Cover Letter

### Serverless Backend

* API Gateway receives requests from the frontend.
* AWS Lambda validates and processes application data.
* A unique application ID is generated automatically.
* Application details are stored in DynamoDB.

### Monitoring

* Lambda execution logs are available in CloudWatch.
* Successful and failed requests can be monitored.

## DynamoDB Table

**Table Name**

```text
JobApplications
```

**Primary Key**

```text
applicationId
```

**Stored Fields**

* applicationId
* fullName
* email
* phoneNumber
* qualification
* experience
* skills
* coverLetter
* appliedDate

## Deployment Steps

### 1. Create DynamoDB Table

Create a DynamoDB table named `JobApplications` with `applicationId` as the partition key.

### 2. Create Lambda Function

Create a Lambda function named `SubmitJobApplication` and configure permissions for DynamoDB access.

### 3. Create API Gateway

Create an HTTP API endpoint and integrate it with the Lambda function.

### 4. Develop Frontend

Build the frontend using:

* HTML
* CSS
* JavaScript

### 5. Configure VPS and Nginx

* Launch a Linux VPS.
* Install Nginx.
* Upload frontend files.
* Host the application using Nginx.

### 6. Testing

* Open the application using the VPS public IP address.
* Submit a job application.
* Verify records in DynamoDB.
* Verify logs in CloudWatch.

## Expected Outcome

The application successfully demonstrates a cloud-native serverless architecture where:

* Frontend is hosted on a VPS using Nginx.
* API requests are handled by AWS Lambda.
* Data is stored in DynamoDB.
* CloudWatch provides monitoring and logging.
* No traditional backend server is required.

## Screenshots

### Frontend Application

<img width="1152" height="1080" alt="Screenshot 2026-06-03 115330" src="https://github.com/user-attachments/assets/2d7919cb-cb5b-45cb-bd03-e984036e7a72" />


### DynamoDB Records

<img width="1920" height="1080" alt="Screenshot 2026-06-03 115421" src="https://github.com/user-attachments/assets/41d788bd-6f67-4bd4-8be2-9e6a4d68c25f" />

### Lambda Function

<img width="1920" height="1080" alt="Screenshot 2026-06-03 115451" src="https://github.com/user-attachments/assets/e69671e0-3034-481c-b287-901a2c9fa15d" />



### API Gateway Endpoint

<img width="1920" height="1080" alt="Screenshot 2026-06-03 115542" src="https://github.com/user-attachments/assets/5ae9722d-4cce-432d-85a6-42d1c4860e3f" />


### CloudWatch Logs

<img width="1152" height="1080" alt="Screenshot 2026-06-03 115128" src="https://github.com/user-attachments/assets/2c01fba0-bc6c-4806-a790-a72d9280255a" />

## Author

**Ramadasu Hari Krishna**
B.Tech – Computer Science Engineering (CSE)


