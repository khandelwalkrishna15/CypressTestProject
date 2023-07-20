@Regression @ApiTest
Feature: API Testing


  Scenario Outline: Verify GET Request
    Given I make a GET request to "https://reqres.in/api/users?page=<page>"
    Then the response status code should be <status>
    And the response body should have page <page>
    And the response body per page value should be equal to the number of data entries
    And in the response user with '<email>' should be present

    Examples:
      | status | page | email                    |
      | 200    | 2    | michael.lawson@reqres.in |

  Scenario Outline: Verify POST Request
    Given I make a POST request to "https://reqres.in/api/users" with the payload:
      """
      <payload>
      """
    Then the POST resuest response status code should be <statusCode>
    And the response body should have a non-empty '<nonEmptyField>'
    And the response body should have the property '<property>'
    And the response headers should contain '<headerKey>' as '<headerVal>'
    And the response duration should be less than <duration> milliseconds
    And the response body should match the JSON schema

    Examples:
      | payload                                 | nonEmptyField | name     | statusCode | property  | duration | headerKey    | headerVal                       |
      | { "name": "Morpheus", "job": "leader" } | id            | Morpheus | 201        | createdAt | 1000     | content-type | application/json; charset=utf-8 |



