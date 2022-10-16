# biospa_new

# bs_procedures_test

This is the frontend-backend project with Express.js React.js and MySQL

# To start Server

1. create .env
2. copy .env.samp data to new .env fail
3. Edit your MySQL parameters in .env fail
4. npm i
5. npm run dev

# Structure Server:

In index.js there are app.use links for main routes

In /routes/ there are route pathes and methods names that are used in /controllers/
In /controllers/ there are methods from the routes that are using MqSQL methods from /models/
In /models/ there is contructor and methods with MySQL statements

# To start Frontend

1. create .env file and save this - SKIP_PREFLIGHT_CHECK=true
2. npm i
3. npm start

# DB

1. db data is hided in .env file, there is sample file to copy
2. connection by Axios

# Arguments

Arguments are passed with Context API

# File structure

Frontend

1. Procedures.

- Page procedures consists of DropDown searh-bar components and ProcedureList components.
- ProcedureList component consists of Search button - GenericBtn and EmailList components.
- .env file constist of Environment variables
- Docker file

Server

- REST API entities and Routes that are required are keeping in index.js are addressing to ->
- Routs file that consist of endpoint and required methods that are addressing to ->
- Models that consist of MySQL clauses

- .env file constist of Environment variables for connection to DB and email smtp data
