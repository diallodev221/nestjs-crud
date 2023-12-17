# Simple NestJs Crud App

## Tech Stacks
- [Nest JS](https://docs.nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://postgresql.org)

## Installation

```bash
$ npm install
```

# Configuration
create a `.env` file in the root of your project directory 

```bash
  PORT=8080

  # Database Configuration
  DATABASE_HOST=localhost
  DATABASE_USERNAME=******** # your username
  DATABASE_PASSWORD=******** # your password
  DATABASE_NAME=******** # your database name
  DATABASE_PORT=5432
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing
Use Postman to test your application
API endpoints:
- Get  /api/users    # find all users
- Get  /api/users/id # get one user based on id
- Post /api/users    # create bew user
- Put  /api/users/id    # update user
- Delete  /api/users/id    # delete user

![Test API](https://github.com/diallodev221/nestjs-crud/assets/105783240/c6ec4598-1235-47b0-976d-2339cce8e8d2)
