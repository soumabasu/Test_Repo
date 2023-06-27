@mobile @iOS
#Author: Soumadip Basu
Feature: Make My Trip | Safari | Basic flow test
  This is to perform an basic automated flow in Make My Trip web application in iOS safari browser

Scenario: launch Make My trip in safari browser
Given I launch the application in my mobile device
When I click on "safari"
And I click on "navigation_bar"
##And I enter text "Make My Trip" in the mobile element "search_box"
When I enter "websitename" in the web element "search_box"
And I click on "search_result"
And I click on "close_registration"
And I wait for "2" seconds

Scenario: Select flights in Make My trip
When I click on "flight"
Then I click on "mob_fromCity"
When I enter "from_city" in the web element "enterCity_name"
And I click on "bengaluru"
And I click on "mob_toCity"
When I enter "to_city" in the web element "enterCity_name"
And I click on "hyderabad"

Scenario: Select dates and other details in Make My trip
When I click on "deptDate"
And I click on element by co-ordinates
And I swipe screen to select next month in calendar
And I click on element by co-ordinates
And I click on done
And I click on "traveller"
And I click on done
Then I click on "searchFlight"
And I verify "flightList" is displyed

