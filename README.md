# Rest Api with nodejs and typescript

## Scripts

In project directory, you can run:

### `yarn test`
Verify if everithing is ok.


## Basic Routes

### `post /login`
params: <br>
{
  email,
  password
}
response: 
{
  token: jwt 
}

### `get /api/users`
params: 
{
  "Authorization": "Bearer {{token}}
}
response: 
{
  users: {}
}
