@Regression @usertest
Feature: Create new user Feature

    Background:
        Given open the OrangeHRM application


    Scenario: Validate all the Quick Launch Texts on dashboard
        When I login to the application successfully
        Then I validate all the Quick Launch texts on dashboard

    Scenario: Create a new user profile, search and Delete the profile
        When I login to the application successfully
        Then I create a new user profile

    Scenario: 'Search' and 'Delete' the user profile
        When I login to the application successfully
        Then I navigete to PIM
        Then I search the user profile
        And I delete the user profile


