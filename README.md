# Full Cycle | Docker | NodeJS Challenge

This repo code contains the solution for NodeJS Challenge - FullCycle trainning - Docker Module.

### How to run the app? 

```
    docker compose up
```

#### But how the code in this repository actually works?

1. Run a Mysql instance, seed database with a table called people and some data.
Find the sql file on the root database folder.

2. Run NodeJS simple application to query this database and render a Nunjucks template with the seeded data on step one.

3. Run Nginx web server to execute a reverse proxy.

### What endpoints are available?

On browser follow:

```
http://localhost:8080/people
```

On curl or http client such as Postman, Insomnia etc:

1. Add a new person
Request type: POST
Url:
```
http://localhost:3333/people
```
Body - 
```
{
    "name": "Dua Lipa"
}
```

2. Find One person by id
Request type: GET
Url:
```
http://localhost:3333/:id
```
Body - N/A


