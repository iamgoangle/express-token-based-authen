## Project structure
```sh
.
├── README.md
├── config.js
├── controllers
├── middlewares
├── models
├── node_modules
├── package-lock.json
├── package.json
├── routes.js
├── server.js
└── services
```

## Technology Stacks
- Express
- Mongo
- Mongoose
- Nodemon
- ~~Passport.js~~
- JWT
- morgan
- ~~Winston~~
- bcrypt

## Prerequsition
- Installed mongodb
- Config database and token expired in `./config.js`

## API Routes
```
No authentication needed routes

User registration use case
http://localhost:3000/api/user/signup

User logged-in use case
http://localhost:3000/api/authentication

Required authentication in header
http://localhost:3000/api/user/getUsers
```

## Access token based authentication only
This version not supports Refresh token, it only have token based authentication only.

## Testing
### Create a simeple user
```
curl -X GET \
  http://localhost:3000/api/user/signup \
  -H 'cache-control: no-cache' \
  -H 'x-access-token: <golf token>'
```

### Get All User in system
```
curl -X GET \
  http://localhost:3000/api/user/getUsers \
  -H 'cache-control: no-cache' \
  -H 'x-access-token: <golf token>
```

### Login use case
```
curl -X POST \
  http://localhost:3000/api/authentication \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d 'username=golf&password=golf'
```