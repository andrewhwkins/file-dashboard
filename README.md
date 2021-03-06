# file-dashboard

File uploading application

project name: file-dashboard

## Getting Started

### Required Software Package Versions to Install

Node: 12.18.3

MySQL

PHP: 7.2.5+

### Install Dependencies

```
yarn
```

```
composer install
```

### Environment Setup

Copy .env.example to .env

Fill in your AWS credentials : https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html

Create a S3 bucket : https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html

Enter the region and bucket name in the .env

### Install the Application Key

Generate Laravel's application key

```
php artisan key:generate
```

### Run the Project

Run the dev server

```
php artisan serve
```

Compile the client

```
yarn dev
```

### Testing

```
yarn test
```

### Linting

```
yarn lint
```

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
