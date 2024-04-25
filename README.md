<h1>Draussen</h1>

<h2>About this project </h2>
The draussen web-app is a full-stack project running on next.js/node.js. 
Its purpose is to offer a community building app with different experiences to a certain target audience. 

Features:
- login / signup screen
- experiences overview
- experiences filter: allows the user to filter the experiences by one or multiple categories
- experiences details: description and further information about events
- profile page
- contact page

<h2>Technologies</h2>

- Typescript / Javascript
- PostgreSQL
- REST API 
- Node.js

<h3> Moodboard & Wireframe </h3>
tbc

<h3>Final Look </h3>
tbc

<h2>Setup</h2>

1. Clone the repository

```
git clone https://github.com/ppmmhh/next.js-draussen
cd next.js-draussen
```

2. Install dependencies 

```
pnpm install
```

3. Setup postgres database

Create file called .env in the project root directory and paste the following, changing to your own username, password and database:

```
PGHOST=localhost
PGUSERNAME=<your username>
PGPASSWORD=<your password>
PGDATABASE=<your database>
```

4. Connect to postgres database and run either:

```
psql -U <user name> <database name> on windows and macOS
sudo -u <user name> psql -U <user name> <database name> on Linux
```

5. Migrate database and run:

```
pnpm migrate up
```

6. Run application

```
pnpm start
```
