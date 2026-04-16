# QueryShield

## About:

Welcome to QueryShield, a project built as part of a semester long project for the Spring 2026 Introduction to Information Security & Privacy taught by Prof. Jian Xiang. This project explores, first, the cryptography concepts of password hashing and salting, and second SQL injection defenses. It uses mySQL for the backend database and Vite React for the frontend.

## Developers:

- Benjamin LaCroix (BinaryBenjamin)
- Ali Alimi (alia27701)

## Set-up:

### Prerequisites

- Have Node.js installed from the official Node.js website.
- Check that you have npm (cmd: `npm -v`) (typically installed with Node.js)

### Running The Project:

- In the project, run `npm install`
- Start development server using the command `npm run dev`

## Step-By-Step Attack Guides (& Examples):

### Login Page:

1. The login page allows a user to login into the program with a login and password.
   These are stored inside of the database. The usernames are stored in plaintext, but whether or not
   the passwords are stored in plaintext or hashed and salted depends on the mode that the program is in.
   The program has two modes: "Vulnerable" and "Secure." In "Vulnerable" mode, the passwords are stored in plaintext, and in "Secure" mode, the passwords are hashed and salted. This mode can be toggled on and off by
   using the toggle slider on the top right of the page.

2. Intially, the database has a default user (among other users) with the username admin and password password123
   This user will be used to demonstrate the programs login functionality, SQL injection vulnerability, SQL injection defenses, and issues with storing passwords in plaintext versus hashing and salting passwords.
   Go ahead and test this by logging in with these credentials. Logout once done.

3. On start up, the program is in "Vulnerable" mode (no SQL injection defenses, passwords stored in plaintext).
   Lets demonstrate the programs vulnerability to SQL injection by trying the following:

- In the username field, enter:
- In the password field, enter anything (doesn't matter what you enter here)
  You should see that you are able to login and...

4. Logout of the program and now try the following:

- Switch the program to "Secure" mode using the toggle slider and trying logging in like you did in step 3. You should see that the SQL injection attack is no longer successful and you are not able to login.

5. Now, let's demonstrate the same actions but with the search page. The search page allows the user
   to query the database for whatever they wish. In "Vulnerable" mode, the search page is vulnerable to SQL injection, but in "Secure" mode, the search page is not vulnerable to SQL injection. Try the following:

- Switch the mode of the program back to "Vulnerable" first, then enable the toggle for the visibility
  of the search query. This will allow you to see the query that is being sent to the database.
- In the search field, enter: ...
