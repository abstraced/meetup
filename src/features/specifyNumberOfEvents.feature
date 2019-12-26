Feature: Specify number of events


Scenario: When user hasn’t specified a number, 32 is the default number

Given the user hasn’t set the number of events to show,
When the user go to the events pages,
Then he will be shown 32 events.

Scenario: User can change the number of events they want to see

Given the user wants to adjust the numbers of events displayed,
When the user changes the number of events to be displayed,
Then the page will update to show the number of events selected.
