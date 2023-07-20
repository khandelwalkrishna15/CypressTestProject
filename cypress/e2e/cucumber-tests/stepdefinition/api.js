/*
* This is spep defination file for API test scenarions 
*/
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

let postResponse;
let getResponse;
//const { Validator } = require('jsonschema');

Given('I make a GET request to {string}', (url) => {
  cy.request({
    method: 'GET',
    url: url
  }).then((response) => {
    getResponse = response;
  });
});

Then('the response status code should be {int}', (statusCode) => {
  expect(getResponse.status).to.eq(statusCode);
});
Then('the response body should have page {int}', (page) => {
  expect(getResponse.body.page).to.eq(page)
});
Then('the response body per page value should be equal to the number of data entries', () => {
  expect(getResponse.body.per_page).to.eq(getResponse.body.data.length)

});

// To check a spectic email is present or not in response body 
Then('in the response user with {string} should be present', (email) => {
  const responseBody = getResponse.body;
  const users = responseBody.data;
  const emailExists = users.some((user) => user.email === email);
  expect(emailExists).to.be.true;

});

Given('I make a POST request to {string} with the payload:', (url, payload) => {
  cy.request({
    method: 'POST',
    url: url,
    body: payload
  }).then((response) => {
    postResponse = response;
  });
});

Then('the POST resuest response status code should be {int}', (statusCode) => {
  expect(postResponse.status).to.eq(statusCode)
});

Then('the response body should have a non-empty {string}', (property) => {
  expect(postResponse.body[property]).is.not.empty

});

Then('the response body should have the property {string}', (property) => {
  expect(postResponse.body).to.have.property(property)
});

Then('the response headers should contain {string} as {string}', (header, value) => {
  expect(postResponse.headers).to.have.property(header, value)

});

Then('the response duration should be less than {int} milliseconds', (duration) => {
  expect(postResponse.duration).to.be.lessThan(duration)
});

Then('the response body should match the JSON schema', () => {
  const jsonSchema = require("../../../fixtures/schema.json")
  //const validator = new Validator();
  //const validationResult = validator.validate(postResponse.body, jsonSchema);
  // Assert the validation result
  //expect(validationResult.valid).to.be.true;

  expect(postResponse.body).to.be.jsonSchema(jsonSchema)

});

