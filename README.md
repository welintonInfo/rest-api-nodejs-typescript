# Rest Api with nodejs and typescript

## Scripts

In project directory, you can run:

### `yarn test`
Verify if everithing is ok.


## Basic Routes

### `POST /login`
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

## Routes /api need the Authorization header
```
{
  "Authorization": "Bearer {token}"
}

```

### `GET /api/users`
```
{
  users: {}
}
```

### Products
```
GET /api/products

```

```
POST /api/products
{
  "name": "Product name",
  "price": 100 
}
```