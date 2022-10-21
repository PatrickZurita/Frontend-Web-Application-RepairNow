Feature: Registered person with purchased insurance registers an appliance

  As a registered person with purchased insurance, I want to register my appliance(s) so that it is protected by insurance

  Scenario: Person registers their appliance
    Given there is a person
    When registering an appliance
    Then a list with various categories and models will appear
    When the person finds the category and model of their appliance
    And add a photo of your appliance
    Then the view will be updated and the system will save the entered appliance.
