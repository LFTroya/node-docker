# Simple node calculator API

Requisites:
- Docker
- Docker-compose

In order to use the api, you need to start up the server:

```
docker-compose up app
```

To ensure the server is up and running visit: [http://localhost:3000]

After doing this, you can use any available endpoints:

```
GET /api/add
GET /api/subtract
GET /api/multiply
GET /api/divide

POST /api/add
POST /api/subtract
POST /api/multiply
POST /api/divide
```

Every endpoint receive two parameters: `a` and `b`

**Example:**
```
/api/add?a=10&b=20

# Full url

http://localhost:3000/api/add?a=10&b=20
```



