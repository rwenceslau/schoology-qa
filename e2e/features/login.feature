@login
Feature: User accessing Schoology - Login

    Scenario Outline: Login successfully
        Given I am a user logging in on Schoology
        When I fill the email with '<email>'
        And I fill the password with '<password>'
        Then I should get to the home page path

        Examples:
            | email                    | password   |
            | wenceslaurodrigo@gmail.com | rwtorres12 |