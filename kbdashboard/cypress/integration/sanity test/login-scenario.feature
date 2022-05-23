Feature: Login/Logout for KB Dashboard

	Background:
		Given User is on the KB Dashboard Login page

	Scenario: User logs in with valid email address and correct password
		When User enters a valid email address
		And User clicks the "Continue" button
		And User enters correct password
		And User clicks the "Login" button
		Then User should be able to login successfully and is redirected to the Dashboard

	Scenario: User inputs invalid email
		When User inputs invalid email
		Then Message "Please enter a valid email address." appears

	Scenario: User clears out the email field
		When User deletes the text in the email field
		Then Message "Email is required." appears

	Scenario: User inputs valid email but invalid password
		When User inputs "hovsqadepartment@gmail.com" for the email
		And Inputs "Password" for the password
		Then Message "Invalid email or password." appears

	Scenario: User clears out the password field
		When User clears out the password field
		Then Message "Password is required." appears


	Scenario: User logs out successfully
		Given User is already on the KB Dashboard
		When User clicks on the Log out button
		Then User would be redirected to the Login page

	Scenario: User log in with unregistered email
		When User inputs unregistered email
		And User clicks the Continue button
		Then Message "Email address not found." would pop up