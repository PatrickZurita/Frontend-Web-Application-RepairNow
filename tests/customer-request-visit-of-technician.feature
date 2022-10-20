Feature: Person requests the visit of a technician from the virtual platform

  As a registered person with purchased insurance, I want to request a visit from a technician to resolve a problem with my white goods.

  Scenario: Registered person with purchased insurance requests the visit of a technician

    Given there is a person already has purchased insurance and wishes to request a visit from a technician
    When you request it
    Then the view shows you a form in which you have to fill in the reason for the request
    And the expected date of the visit.

  Scenario: Person requests the visit of a technician

    Given the ir a person wishes to request a visit from a repair technician
    When the person requests it
    Then the website uses the API of the service to schedule the request to the general registry
