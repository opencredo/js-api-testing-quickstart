# Example Mocha / Chai Javascript test framework

An example test framework to get started with API testing using Javascript. Uses the TheyWorkForYou.com API as an example.

## Tech stack

- Javascript
- Mocha: Node.js based testing framework
- Chai: assertion library
- Axios: promise-based async http client
- Flow: static type checker

## How to get started

- Get an API key from https://www.theyworkforyou.com/api/key - you'll have to sign up for an account
- Export the API key to your environment: `export TWFY_KEY=...`
- Clone the project and cd into the project directory
- Download dependencies: `npm build`

Now you can just run the tests: `npm test`

All done!