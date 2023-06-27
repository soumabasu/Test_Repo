@MMT
#Author: Soumadip Basu
Feature: Make My Trip | Boiler Plate
  This is to perform an automated flow to select flight on Make my trip website

  Scenario: Make my trip | Launch make my trip and select cities
  Given I launch the url "https://www.makemytrip.com/"
  #And I close the advertisement by clicking "closeAdvertise"   // Uncomment this step if welcome advertisement is coming when navigating to MMT website
  Then I click "fromCity"
  When I enter text "Bengaluru" in the web element "enterfromCity"
  And  I click "selectfromCity"
  Then I click "toCity"
  And I enter text "Hyderabad" in the web element "entertoCity"
  And I click "selecttoCity"

  Scenario: Make my trip | Date and passenger selection
  Given I select future date in calender
  And I click "tarvellerClass"
  And I click "adultnum"
  And I click "childrennum"
  And I click "infantnum"
  And I click "buisnessClass"
  And I click "applyBTN"
  And I wait for "2" seconds
  Then I click "searchBTN"

  Scenario: Make my trip | select flght with filter
  Given I wait for "advertisePopup" to display
  When I click "advertisePopup"
  And I verify "airIndiaFilter" filter and click
  And I scroll to see the element "pageBottom"
  Then I fetch and print airlines name and duration and price
  And I verify filter implemented correctly
   

