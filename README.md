# 03 JavaScript: Password Generator
## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```
## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Description
The goal of this project is to add a function to preexisting code. When the "Generate Password" button is pressed, a prompt pops up asking for a password length from 1 to 128. If the user inputs something outside the range or something that wasn't a numerical value, then the function ends and gives a message. If the input is valid, then 4 confirm prompts are asked for if we would like to include lowercase letters, uppercase letters, numbers, or special characters. If the user says no for all options, function ends and give a message. If at least one choice was accepted, the function loops the chosen length and randomly chooses a character from the accepted characters. The string is passed and displayed on the html.

## Usage
