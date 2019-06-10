# Building an API using a Relational Database

## Topics

- Databases
- Relational Databases
- Knex migrations.
- Seeding data.

## Assignment

Build an API that persists data to SQLite3.

Use knex migrations to create a database called `lambda.db3` and add the following tables:

#### cohorts

- `id`: primary key, auto-increments.
- `name`: text, required.



#### students

- `id`: primary key, auto-increments.
- `name`: text, required.
- `cohort_id`: references the `id` in the cohorts table.



Use knex seeding feature to add test data to your tables.

Implement the following endpoints:

- `[POST] /api/cohorts` This route should save a new cohort to the database.
- `[GET] /api/cohorts` This route will return an array of all cohorts.
- `[GET] /api/cohorts/:id` This route will return the cohort with the matching `id`.
- `[GET] /api/cohorts/:id/students` returns all students for the cohort with the specified `id`.
- `[PUT] /api/cohorts/:id` This route will update the cohort with the matching `id` using information sent in the body of the request.
- `[DELETE] /api/cohorts/:id` This route should delete the specified cohort.

## Stretch Problem

Add the following endpoints.

- `[POST] /students` This route should save a new student to the database.
- `[GET] /students` This route will return an array of all students.
- `[GET] /students/:id` This route will return the student with the matching `id`.
- `[PUT] /students/:id` This route will update the student with the matching `id` using information sent in the body of the request.
- `[DELETE] /students/:id` This route should delete the specified student.

Have the student returned by the `[GET] /students/:id` endpoint include the cohort name and remove the `cohort_id` fields. The returned object should look like this:

```js
{
  id: 1,
  name: 'Lambda Student',
  cohort: 'Full Stack Web Infinity'
}
```


Data migration notes:

- run: npx knex to get all the commands for knex
- run: npx knex init: to generate a fresh knexfile.js in the root folder
- modify: knexfile.js to configure our db connections
- make a migration for each db schema change
- remove/comment all configurations you don't need (staging, production in our case)

To create a fresh new migration file to make a new table:
  - npx knex migrate:make <name>

Once you've written what you need to make/update the table, you need to run the latest migration:

  - npx knex migrate:latest

to rollback/revert the last change:
  - npx knex migrate:rollback