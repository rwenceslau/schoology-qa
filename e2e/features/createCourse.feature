@createCourse
Feature: The user can create a simple course

    Background: User logging on Schoology
        Given I am a user logged in on Schoology page

    Scenario Outline: User creating a course

        And I click the Courses button in the header
        And I click the My Courses Link in the inner menu
        And I click the Create Course button in the Manage Courses section
        And I fill '<name>' as the course name
        And I fill '<section>' as the section name
        And I select a valid subject area
        And I select a valid level
        When I click the Create button
        Then I should see the recently created course label
        And I see the created course Access Code

        Examples:
            | name                    | section   |
            | Automation Test Name| Automation Section Name |
