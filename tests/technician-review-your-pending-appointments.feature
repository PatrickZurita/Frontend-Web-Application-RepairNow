Feature: Technician reviews your pending appointments

  As a registered technician I want to view my pending appointments to be informed about the details

  Scenario: Person requests a service close to the technician

    Given the technician is in his profile
    And go in to see their appointments
    Then a list with all your pending appointments is displayed
