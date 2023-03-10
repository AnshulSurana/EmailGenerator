# EmailGenerator

Email Guesser is a simple application. The UI accepts the full name and company domain and display the derived email address.
and backend is a HTTP micro service with a single end point to derive email address for a person, given their full name and company domain

## Project setup

This project consist of two separate applications backend and frontend. This setup is particularly created in order to demonstrate two separate deployments. The project consists of tests using Jest and react testing library, the reports of which can be published after running test command.

## Application Structure

```
├── backend
    - src
        - controller
            - contants // constants 
            - email.controller // controller file to handle end point logic
        - logger // logger 
    - test // jest unit test cases folder
    - config // config of the app
    - server // **Main app file that launches express **
    - sampleData.json // sample data 
    - routes // routes for the app
    - jest-unit.config // jest config 
    - tsconfig.json // typescript config
    - package.json // package.json
├── frontend
    - src
        - Components // components
        - Hooks // Custom hooks used in the project
        - Services // service to make a call
        - Styles // styles used in the app
    - test // jest unit tests
    - App.tsx // Application input
    - index.tsx // root application
    - .eslintrc // eslint config file
    - jest-unit.config
    - reportWebVitals // web vital report to log for the application
    - tsConfig // typescript config
    - webpack.config //. webpack config for bundling


```
# Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions. from github

```bash
# Clone the repo.
git clone https://github.com/AnshulSurana/EmailGenerator.git;

# Goto the cloned project folder.
cd EmailGenerator;
```

After getting into the project -  run these two commands in separate terminal

for backend run
```
cd backend
npm install
npm start
```

for frontend run
```
cd frontend
npm install
npm start
```

Screens:

![Screen](/frontend/assets/1.png)
![Screen](/frontend/assets/2.png)
![Screen](/frontend/assets/3.png)


## The project is based on some base assumptions - 
* it generates domain valid only from `
    {
    "Jane Doe": "jdoe@babbel.com",
    "Jay Arun": "jayarun@linkedin.com",
    "David Stein": "davidstein@google.com",
    "Mat Lee": "matlee@google.com",
    "Marta Dahl": "mdahl@babbel.com",
    "Vanessa Boom": "vboom@babbel.com"
    }
* It only considers first two words as first name and last name.`
* Validation is restricted to empty field and domain regex expressions.
* This is designed for laptop views, mobile will look a bit small.

## Project can further be enhanced - 
*  a file uploader can be implemented as a set of data to generate emails from.
*  emails can be stored in DB.

# Backend 

This Project contains Node API for Email Guesser App.

**Author**
Anshul Surana - surana.anshul@gmail.com

## Prerequisites

```
    Node >= 18
    NPM >= 8
```

## Reference Documentation

    Express - https://expressjs.com/en/4x/api.html
    Node - https://nodejs.org/dist/latest-v18.x/docs/api/
    and https://developer.mozilla.org/en-US/

## Unit Tests
    npm run test

## End point
* GET /api/v1/generateEmail*
    - generate email from fullname and domain
* GET /healthcheck*
    - health check api 


# FrontEnd

This is Front end application for Email Guesser app. This is a single page application that has two input field and outputs generates email.

 **Author**
Anshul Surana - surana.anshul@gmail.com

## Prerequisites
- Node >= 18
- NPM >= 8

## Reference Documentation
- React - https://reactjs.org/docs/getting-started.html
- Styled Component - https://styled-components.com/docs
- Webpack - https://webpack.js.org/
- and https://developer.mozilla.org/en-US/

## Building and Running
    npm install
    npm start

Web page at - http://localhost:8080/home
## Unit Tests
    npm run test
