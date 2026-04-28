# QueryShield

## About:

Welcome to QueryShield, a project built as part of a semester-long project for the Spring 2026 Introduction to Information Security & Privacy taught by Prof. Jian Xiang. This project explores, first, the cryptography concepts of password hashing and salting, and second, SQL injection defenses. It uses MySQL for the backend database and Vite React for the frontend.

## Developers:

- Benjamin LaCroix (BinaryBenjamin)
- Ali Alimi (alia27701)

## Set-up:

### Prerequisites

- Have Node.js installed from the official Node.js website.
- Check that you have npm (cmd: `npm -v`) (typically installed with Node.js)
- Make sure you also install MySQL workbench and import the databases for them too as without them, the system won't function correctly
- The two databases are in the database_source folder
- Make sure your MySQL workbench is also set up the same way as what was said in the database.js file in the backend/server folder

### Running The Project:

- In the project, run `npm install`
- Start development server using the command `npm run dev`
- Make sure you have two terminals and run `npm run dev` for both of them. One for the 3200-semester-project folder and one for the backend folder

## Step-By-Step Attack Guides (& Examples):

### Login Page:

1. The login page allows a user to log in to the program with a login and a password.
   These are stored inside the database. The usernames are stored in plaintext, but whether or not
   the passwords are stored in plaintext or hashed and salted depends on the mode that the program is in.
   The program has two modes: "Vulnerable" and "Secure." In "Vulnerable" mode, the passwords are stored in plaintext, and in "Secure" mode, the passwords are hashed and salted. This mode can be toggled on and off by
   using the toggle slider on the top right of the page.

2. Initially, the database has a default user (among other users) with the username EasyPasswordGuy and the password "password."
   This user will be used to demonstrate the program's login functionality, SQL injection vulnerability, SQL injection defenses, and issues with storing passwords in plaintext versus hashing and salting passwords.
   Go ahead and test this by logging in with these credentials. Log out once done.

3. On startup, the program is in "Vulnerable" mode (no SQL injection defenses, passwords stored in plaintext).
   Let's demonstrate the program's vulnerability to SQL injection by trying the following:

- In the username field, enter any string. Ex: "username"
- In the password field, enter "' OR 1=1 -- " (excluding the double quotation marks and including the single). Remember the space at the end.

4. Log out of the program and now try the following:

- Switch the program to "Secure" mode using the toggle slider and try logging in as you did in step 3. You should see that the SQL injection attack is no longer successful, and you are not able to log in.
- Note: Doing this will end up causing the backend to disconnect and crash. Make sure you run `npm run dev` in the terminal of the backend again to get the program running correctly.

5. Now, let's demonstrate the same actions but with the search page. The search page allows the user
   to query the database for whatever they wish. In "Vulnerable" mode, the search page is vulnerable to SQL injection, but in "Secure" mode, the search page is no longer vulnerable to SQL injection. Try the following:

- Switch the mode of the program back to "Vulnerable" first, then enable the toggle for the visibility of the search query. This will allow you to see the query that is being sent to the database.
- In the search field, enter: "' OR 1=1 -- " (excluding the double quotation marks and including the single). Again, remember the space at the end.
- You should find that the data for all the users is returned.
- Now, switch the program to "Secure" mode using the toggle slider and try the same thing again. Nothing should show in the search results now.

## Explanation:
The difference in results between "Secure" and "Vulnerable" mode is caused by "Secure" mode using a concept known as parameterized queries, and "Vulnerable" mode using simple string interpolation. This can be seen by analyzing the login and search APIs. In short, the data is protected since parameterized queries treat all user-generated input as data and not executable code. This effectively prevents the attacker from writing their own SQL query logic that could modify, add to, or delete data in the database. Such an action would compromise the integrity of the data. It also prevents executing logic that would cause the entirety of the database to be leaked to an unauthorized individual, erasing confidentiality. Furthermore, parameterized queries are used to prevent the user from bypassing the login screen without valid login credentials. This ensures user authentication by only allowing identified users past the login screen.

This project also implements salted password hashing as an extra security mechanism. This can only be shown in a case of a data breach, and is consequently not part of the step-by-step guide. Password salting is done by taking a randomly generated user-specific value and concatenating it with the plaintext password before hashing occurs. This makes the salted hash unique even when the password is the same.

