Feature: Registered technician changes their personal information

  As a registered customer I want to change my personal information to keep it up to date

  Scenario: Technician changes their personal information
    Given the technician wants to change his personal information
    When you modify your personal information
    And save the changes
    Then view updates the changes and the system saves them

  Scenario: Technician enters incorrect data
    Given the technician wants to change his personal information
    When you modify your personal information
    And enter wrong data
    Then the view shows a warning informing that the data entered is incorrect
