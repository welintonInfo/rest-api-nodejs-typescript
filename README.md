# Rest Api with nodejs and typescript

## Scripts

In project directory, you can run:

### `yarn test`
Verify if everithing is ok.


## Basic Routes

### `post /login`
params: 
<br>
{
  email,
  password
}
<br>
response: 
<br>
{
  token: jwt 
}

### `get /api/users`
params: 
<br>
{
  "Authorization": "Bearer {{token}}
}
<br>
response: 
<br>
{
  users: {}
}
