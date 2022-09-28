Feature: Registered person log in with email and password

    As a registered person I want to log in with my registered email and password to access the virtual platform

    Scenario: Valid account
        Given the person wants to log in
        And enter a valid account
        When you log in
        Then the system allows you to access.

    Scenario: Invalid account
        Given the person wants to log in
        And enter an invalid account
        When you log in
        Then the view shows a warning informing that the account is incorrect.

    Scenario: Missing fields
        Given the person wants to log in
        When you forget to enter a field
        Then the view highlights the missing fields