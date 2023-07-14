# Email Syntax Validation API



## Description

This is a simple backend exercise that uses Node.js and Express.js to create a server that serves JSON as a response to a REST API calls. API Validate the Syntax Validation, including regix.

## Endpoints After the completeing Instructions blow(How to setup and run locally) 

### POST /validate

This API returns the validation of the syntax in boolean value(true or false).


## Instructions

**Step-1:** Fork and clone the repository.
```bash
git clone https://github.com/Bilal-Gujjar/validateEmailSyntax
```

**Step-2:** Download and Install Node.js  LTS from [here](https://nodejs.org/en/download).

**Step-3:** Install dependencies.
```bash
npm install
```
**Step-4:** Run the server.
```bash
npm start
```
Server will be running on port 4000.(http://localhost:4000/validate)


**Step-5:** Run the test.
```bash
npm test
```
Test cases include the following cases:

Should validate a correct email 

    ✓ should validate a correct email
    ✓ should invalidate an incorrect email with multiple @ 
    ✓ should invalidate an email without domain 
    ✓ should invalidate an email without local part 
    ✓ should validate when email contains leading/trailing spaces 
    ✓ should invalidate an email without two characters after the last dot 



Hope you enjoy the Solution!
