Feature: Example feature
  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario Outline: Reading documentation
  	Given I am on the Cucumber.js GitHub repository
    When I go to the README file
    Then I should see "<server>" as the page title

    Examples:
    	| server 		|
	    | VRTVW25624    |
