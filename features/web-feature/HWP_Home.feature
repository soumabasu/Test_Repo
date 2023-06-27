@HollywoodPark
Feature: Hollywood Park | Home
  This is to perform automated fucntional testing on Hollywood Park  Website

  Scenario Outline: Hollywood Park | Home
    Given I launch the url "https://hollywoodparkca.com/en-us/"
    Then I verify title of the webpage
    And I should see multiple elements
      | LocatorName           |
      | hollywoodParkDropdown |
      | ticketMasterLabel     |
      | cookiePolicyCard      |
  # And I should see "hollywoodParkDropdown"
  # And I should see "ticketMasterLabel"
  # And I should see "cookiePolicyCard"

  Scenario Outline: Sofi Stadium - Home of the Rams and Chargers | Hollywood Park
    Given I click "hollywoodParkDropdown"
    And I should see "SofiStadiumLink"
    When I click "SofiStadiumLink"
    # Then I should see "sofiStadiumHeader"
    And I should see multiple elements
      | LocatorName            |
      | sofiStadiumHeader      |
      | eventsDropdown         |
      | stadiumToursLink       |
      | premiumExperiencesLink |
      | theQuipmentRoomLink    |
      | planYourVisitDropdown  |
      | dineWithUsLink         |
