@mobile @android
#Author: Soumadip Basu
Feature: Pedometer | Basic flow test
  This is to perform an basic automated flow in pedometer application

  Scenario: launch the pedometer application and set goal
  Given I launch the application in my mobile device
  Then I verify "openningText" is displyed
  When I click on "next"
  And I click on "skip"
  And I click on "allow_button"
  And I click on "goal"
  Then I swipe screen to set "goals"
  And I verify value of "setGoal" as "7000"
  And I click on "ok_button"
  Then I verify value of "goal" as "7000"
  And I click on "next"

  Scenario: Set height weight and age
  Given I click on "height"
  Then I swipe set height screen to set feet
  And I swipe set height screen to set inches
  And I click on "ok_button"
  Then I click on "weight"
  Then I swipe screen to set "weight"
  And I click on "ok_button"
  When I click on "age"
  Then I swipe screen to set "age"
  And I click on "ok_button"

  Scenario: Allow permissions and navigate to home screen
  Given I click on "next"
  And I click on "allow_button"
  And I click on "ok_button"
  Then I click on "ok_button"
  Then I verify "home" is displyed
  And I verify "activity" is displyed
  And I verify "eyeCare" is displyed
  And I wait for "3" seconds