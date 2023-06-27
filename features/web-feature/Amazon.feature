@Amazon
#Author: Soumadip Basu
Feature: Amazon | Boiler Plate
  This is to perform an automated flow to add a men's shirt to cart and verify that shirt is added successfully in Amazon Website

  Scenario Outline: Amazon | Launch amazon website and go to men's shirt section
    Given I launch the url "https://www.amazon.in/"
    Then I click "amazonLogo"
    And I click "fashion_menu"
    When I move the cursor over "men_link"
    And I click "shirts_link"

  Scenario Outline: Amazon | Select any shirt from the product list and set size, quantity, colour
    Then I move the cursor over "first_shirt"
    And I wait for "2" seconds
    And I click "quickLook"
    When I click "productDetails"
    And I select "XL" from the visible text of "sizeDropdown" dropdown
    Then I verify value of "selectedProductsize" as " XL "
    When I click "color_blue"
    And I select "2" from the visible text of "productQuantity" dropdown
    Then I verify value of "selectedProductQuantity" as "2 "

  Scenario Outline: Amazon | Fetch all the selected data and price for the shirt and verify that only selected quantity is added to cart
    And I fetch and print "productTitle"
    And I fetch and print "selectedProductQuantity"
    And I fetch and print "selectedProductsize"
    And I fetch and print "productPrice"
    When I scroll to see the element "addtoCart"
    And I click "addtoCart"
    When I click "goTocart"
    And I fetch and print "subTotalitem"
    Then I verify value of "subTotalitem" as "Subtotal (2 items):"
