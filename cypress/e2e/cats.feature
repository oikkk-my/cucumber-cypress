Feature: Looking for cats

Scenario: I am lucky to search for cats in Yahoo 
  Given I launch website 'www.yahoo.com'
  When I type 'cats' on '//input[@id="ybar-sbq"]'
  When I hit esc
  When I click on '//button[@type="submit"]'
