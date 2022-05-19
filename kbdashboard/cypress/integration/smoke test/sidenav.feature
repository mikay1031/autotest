Feature: Sidenav

Background
      Given User is in the Dashboard

Scenario: User sees the Sidenav Categories
When User navigates to Dashboard
Then User would see the Categories in the Sidenav

Scenario: User views the Install KB Extension button
When User inspects the Sidenav
Then User would see the Install KB Extension button

Scenario: User selects Backend category
When User selects Backend category in Sidenav
Then User would see "Missing HTTP Security Headers - Bug Bounty Tips" shared link

Scenario: User selects Creators category
When User selects Creators category in Sidenav
Then User would see "Afterparty" shared link

Scenario: User selects Cryptocurrency category
When User selects Cryptocurrency category in Sidenav
Then User would see "Blockchain & Crypto 101: Guide for Beginners | Binance Academy" shared link

Scenario: User selects Design category
When User selects Design category in Sidenav
Then User would see "How to improve your design when user testing is not viable" shared link

Scenario: User selects DevOps category
When User selects DevOps category in Sidenav
Then User would see "Terraform AWS modules" shared link

Scenario: User selects Engineering category
When User selects Engineering category in Sidenav
Then User would see "Activation Functions in Neural Networks" shared link

Scenario: User selects Finance category
When User selects Finance category in Sidenav
Then User would see "How Ramp’s early adoption of stablecoins increased our Corporate Treasury returns" shared link

Scenario: User selects Frontend category
When User selects Frontend category in Sidenav
Then User would see "This will really add value to efficiency when doing FE dev." shared link

Scenario: User selects Growth category
When User selects Growth category in Sidenav
Then User would see "The Growth Mindset - What is Growth Mindset - Mindset Works" shared link

Scenario: User selects Hiring category
When User selects Hiring category in Sidenav
Then User would see "Startup Engineering Hiring Anti-Patterns" shared link

Scenario: User selects Leadership category
When User selects Leadership category in Sidenav
Then User would see "20 Soft Skills for Better Engineering Leaders | Productboard" shared link

Scenario: User selects Management category
When User selects Management category in Sidenav
Then User would see "Managers should ask for feedback" shared link

Scenario: User selects Marketing category
When User selects Marketing category in Sidenav
Then User would see "4 Email Marketing Strategies for Your App Launch - Messapps" shared link

Scenario: User selects Others category
When User selects Others category in Sidenav
Then User would see "Advanced Remix" shared link

Scenario: User selects Product Management category
When User selects Product Management category in Sidenav
Then User would see "How to develop product sense" shared link

Scenario: User selects Productivity category
When User selects Productivity category in Sidenav
Then User would see "9 Habits Of Productive People" shared link

Scenario: User selects Psychology category
When User selects Psychology category in Sidenav
Then User would see "Positive Thinking Mind" shared link

Scenario: User selects Quality Assurance category
When User selects Quality Assurance category in Sidenav
Then User would see "QA trends in 2022 to prioritize" shared link

Scenario: User selects Remote category
When User selects Remote category in Sidenav
Then User would see "The art of remote communication - Remote Work" shared link

Scenario: User selects Sales category
When User selects Sales category in Sidenav
Then User would see "Endgame | Welcome to product-led sales" shared link

Scenario: User selects Startups category
When User selects Startups category in Sidenav
Then User would see "Fiat Republic" shared link

Scenario: User selects Strategy category
When User selects Strategy category in Sidenav
Then User would see "A Taxonomy of Moats" shared link

Scenario: User selects Tools & Software category
When User selects Tools & Software category in Sidenav
Then User would see "Visual Studio Code for the Web" shared link