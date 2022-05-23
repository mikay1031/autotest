Feature: Search 

Scenario: KB Dashboard has a Search option
Then User would see the Search bar

Scenario: User searches KB links by Keyword
When User types ex. "Sales"
Then KB link ex. "Endgame | Welcome to product-led sales" would be displayed

Scenario: User searches KB links by letter
When User types ex. "e"
Then User would see result example "tamagui.dev" 

Scenario: User searches KB links by number
When User types ex. "20"
Then Kb link ex. "20 Soft Skills for Better Engineering Leaders | Productboard" would be seen 

Scenario: User searches a keyword But with no result
When User types ex. "demotivate"
Then It would return an empty page

Scenario: Search field has an empty default value
When User inspects the Search field
Then User would see Search field having empty value