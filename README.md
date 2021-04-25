# Express Mongoose Boilerplate With Testing

This boilerplate is designed to allow you to quickly and easily spool up a boilerplate project which uses Express, MongoDB, Mongoose, and node clustering. This boilerplate comes wired up with Jest and Supertest, to allow you to not think about setting up a project and just jump right in! By default, a testing pipeline is set up via github actions for `main` and `dev` branches to test both unit and integration tests on `push` and `pull-request`. By no means is this the only way to create a service. It's one of my favorites though!

## Using the Template

GitHub allows you to use a repo as a template by hitting that big green `Use This Template` button. After that, clone your project to your machine and start hacking!

## Installation

`cd` into your folder and run `npm install` to install dependencies.

## Setting up Environment

To set up your environment, copy `.env-example` to `.env`. Fill in the `<ENTER_VALUE_HERE>` sections with your MongoDB data. If you would like to use clustering, increase the number in `MAX_WORKERS` to greater than one. The number of workers will never go higher than the number of logical processors in the machine running the server, so set it to be huge (like 100 or 1000) if you want to run on all processors in the machine.

## Running

There are two commands used to run the server:

- `start` - Starts without watch
- `start:dev` - Starts watching

## Testing

Jest is implemented as the testing framework. Supertest is used to test API functionality. The following npm commands control testing:

- `test` - Runs all tests once
- `test:ci` - Runs all tests and provides code coverage
- `test:unit` - Runs only tests in `tests/unit/`
- `test:integration` - Runs only tests in `tests/integration/`
- `test:dev` - Runs all tests in dev mode (watching)

Dummy testing data can be kept in `tests/fixtures/` for cleanliness.

Happy hacking!
