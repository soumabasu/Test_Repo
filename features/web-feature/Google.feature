Feature: Google | Home
  This is to perform automated fucntional testing on Google Home  Website

  Scenario Outline: Google | Home
    Given I launch the url "www.google.com"
    When I enter "deloitte" in the web element "googleSearch"
    When I enter "code" in the element "googleSearch" of the user "USER02"
