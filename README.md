# Invoice timeline

Demo available at [it.badr.io](http://it.badr.io/)

## Installation

### Database

I recommend using [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/) in order to setup the PostgreSQL database. Once they are installed, simply run this at the project root.

```
docker-compose up --d
```

This will start a docker container in detached mode, in which the database will live.

Now, we need to create a database. Start by connecting to the container we just created.

```
docker exec -ti invoice_postgres bash
```

Log in to the postgre service with your username (here `postgres`)

```
psql -U postgres
```

Create the database SQL style

```
CREATE DATABASE invoice_timeline
```

### Back-end

Install dependencies

```
cd back
npm install
```

Configure database environment variables by creating a `.env` file

```
cp example.env .env
nano .env
```

Populating the database with random data

```
npm run populate
```

Start the API

```
npm start
```

### Front-end

Install dependencies

```
cd front
npm install
```

Configure API endpoint in env.js

```
cp env.example.js env.js
nano env.js
```

To run the app in production mode, you need to build it first

```
npm run build
```

Start the app

```
npm start
```

You're all set!

### Side note

I used [PM2](http://pm2.keymetrics.io/) to manage the node processes.

## What I was able to implement

* Populate the database with random yet consistent data, using [faker](https://www.npmjs.com/package/faker)
* List invoices with relevant data
* Ability to filter by status
* Simple search field
  * Tries to match given string with any field that is displayed in the table
* Link to invoice detailed page
* Detailed information about the invoice
  * Customer, amount, reference
  * Payment details
* Timeline of every event that happened to the invoice
  * Reminder
  * Status change
  * Comment
  * Payment
* Ability to comment on the invoice
  * Timeline is refreshed automatically in order to show the newest comments
* Ability to mark an invoice as paid, or as in dispute
* Some styling, using [next-sass](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)

## What I would have wanted to implement next

* Filter by multiple statuses, using a dropdown and checkboxes
* Work more on the design, which is very basic
* Work on a model for the invoice status, e.g. a model that would automatically determine when an invoices changes from due to overdue
* Implement a smarter search, using multiple keywords in order to filter on multiple fields
* Of course, challenge myself with the bonuses

## What I have learned

A lot! This was my first experience with Next.js. I have had the chance to work (**a little bit**) on a similar stack (React / GraphQL / Sequelize / PostgreSQL) on a side project with some friends, so I had (at least some) understanding of how it all worked together.

Coming from a PHP (Symfony) background, this project allowed me to really discover how a full JS project works. Anyway, this was a very interesting and educational weekend for me. I hope you will like my work!
