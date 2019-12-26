Feature: Show/hide an event's details


Scenario: An event element is collapsed by default

Given the user has connected to the app,
When the user look at the events,
Then the informations are hidden( collapsed) by default .

Scenario: User can expand an event to see its details

Given the user wants to see a specific event
When the event is clicked
Then the event is expanded and more details are displayed

Scenario: User can collapse an event to hide its details

Given the user no longer wants to see expanded details about an event
And the user has displayed the extra_infos
When the user clicks the event button
Then the event is collapsed and its informations are hidden