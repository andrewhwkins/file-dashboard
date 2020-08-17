# file-dashboard

File uploading application

project name: file-dashboard

## Getting Started

### Required Software package versions to install

Node: 12.18.3
PHPMyAdmin
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

Create a S3 bucket

Enter the region and bucket name in the .env

### Run the Project

```
php artisan serve
```

```
yarn dev
```

### Required VSCode extensions to install

Prettier
Eslint

Add "prettier.singleQuotes": true to user settings

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
