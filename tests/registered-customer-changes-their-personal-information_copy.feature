Feature: Registered customer changes their personal information

  As a registered customer I want to change my personal information to keep it up to date

  Scenario: Customer changes their personal information
    Given the client wants to change his personal information
    When you modify your personal information
    And save the changes
    Then view updates the changes and the system saves them

  Scenario: Customer enters incorrect data
    Given the client wants to change his personal information
    When you modify your personal information
    And enter wrong data
    Then the view shows a warning informing that the data entered is incorrect
