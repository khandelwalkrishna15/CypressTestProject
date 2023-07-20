@Regression @NewTab
Feature: Handling of new browser Tab and window

    Background:
        Given open the application


    Scenario Outline: Handling new Browser Tab with removing the target attribute
        When I remove the 'target' attribute from tab link and click the tab link
        And new tab should be successfully opened
        Then the new tab header should be '<tab_page_heading>'
        And I go back to '<main_page_heading>'

        Examples:
            | tab_page_heading | main_page_heading |
            | All Courses      | Practice Page     |

    Scenario: Handling new Browser Tab without removing the target attribute
        When I get the url and visit the new tab url
        Then I should be on the new window with URL new_Window_Test_Url
        And the new tab header should be '<tab_page_heading>'
        And I go back to '<main_page_heading>'

        Examples:
            | tab_page_heading | main_page_heading |
            | All Courses      | Practice Page     |

    Scenario Outline: Handling new Browser Window
        Given I visit the tab_test_url
        When I intercept the window.open function
        And I click on the element to open new window
        And the new tab header should be '<tab_page_heading>'
        And I go back to '<main_page_heading>'

        Examples:
            | tab_page_heading | main_page_heading |
            | All Courses      | Practice Page     |


