# Scalable and Secure Portfolio Website Deployment with AWS Route 53 and S3

## Introduction

This repository contains the code and configuration files for deploying a scalable and secure portfolio website using AWS Route 53, S3, and CloudFront. With this setup, you can host your portfolio website on a custom domain, implement SSL encryption, improve performance with a Content Delivery Network (CDN), and efficiently manage your website files with versioning and object lifecycle policies.

## Prerequisites

Before deploying the portfolio website, you will need the following:

1. An AWS account with appropriate permissions to create and manage Route 53, S3, and CloudFront resources.
2. Domain name purchased through Route 53 or transferred to Route 53 registrar services.

## Architecture Overview

The portfolio website deployment architecture consists of the following components:

1. **Amazon S3 Bucket**: Hosts the static website files, such as HTML, CSS, JavaScript, and images.

2. **Amazon Route 53**: Used to manage the domain name's DNS records and route traffic to the S3 bucket.

3. **Amazon CloudFront**: Serves as a CDN to cache and distribute website content globally, reducing latency and improving performance.

## Getting Started

Follow these steps to deploy the portfolio website:

1. Clone this repository to your local machine.

2. Navigate to the `website` directory and replace the sample website files with your own portfolio content.

3. Open the `cloudformation` directory and modify the CloudFormation templates if needed, providing your AWS-specific configuration.

4. Deploy the CloudFormation stack by running the following command in the AWS CLI:

