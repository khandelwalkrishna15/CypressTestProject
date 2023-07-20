@Regression @usertest
Feature: Create new user Feature

  Background:
    Given open the OrangeHRM application
  # @usertest hooks is used to utilize

  Scenario: Create a new user profile, Edit  and upload file the job information
    When I login to the application successfully
    Then I create a new user profile
    And I edit the profile Job information
    And I upload the employee's document
    And I save the profile successfully

  Scenario: Create a new user profile, Edit the job information and then Delete the profile
    When I login to the application successfully
    Then I navigete to PIM
    And I search the user profile
    And I navigate to user job information
    And I terminate the user profile

