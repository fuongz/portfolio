---
title: "Securely Upload Files to S3 for Guests Using AWS Cognito"
description: "For security reasons, if you allow guest users to upload files from your app, it's better to use Guest Access from AWS Cognito instead of a direct AWS Access Key from an IAM User."
date: "2026-01-30"
tags: ["AWS", "Next.js", "Amazon S3", "Amazon Cognito"]
---

## Why?

- An IAM User access key is long-lived and never expires
- AWS Cognito enables control over temporary guest access key validity periods

## Requirements

- AWS Cognito Identity pool
- S3 Bucket

## Step-by-Step Instructions

### 1. Create Cognito Identity Pool

- Navigate to **Amazon Cognito > Identity pools > Create identity pool**
- Configure trust settings by selecting **Guest access** (enables unauthenticated access)
- Configure permissions: Create new IAM role with required permissions (`iam:CreateRole`, `iam:PutRolePolicy`, `iam:AttachRolePolicy`, `iam:DetachRolePolicy`, `iam:TagRole`/`iam:UntagRole`)
- Name the role `guest-uploader-role`
- Configure pool properties with name `guest-uploader-pool`

### 2. Create S3 Bucket

- Go to S3 and create a bucket named `guest-bucket`

### 3. Add S3 Permission to Role

- Navigate to **IAM > Roles** and find `guest-uploader-role`
- Create an inline policy with the following JSON:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::guest-bucket/uploads/*"
    }
  ]
}
```

- Name the policy `S3UploadPolicy`

### 4. Update CORS Configuration

- Go to the S3 bucket **Permissions** tab
- Edit CORS settings to allow `PUT` method from your frontend URL:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["PUT"],
    "AllowedOrigins": ["https://your-frontend-url.com"],
    "ExposeHeaders": []
  }
]
```

## Best Practices

- **Block all public access** to the S3 bucket for security
- **Set lifecycle policies** to delete files after 6 months for cost optimization
