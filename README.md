# Instagram Clone
This project is an Instagram clone built using React and Firebase as a database.
It implements clean architecture throughout the project.

## Features
* Users can sign up and log in
* Users can like and comment on other users' posts
* Users can follow and unfollow other users
* Users can view their own profile and other users' profiles

## Technologies Used
* React
* Firebase Authentication
* Firebase Firestore

## Installation
To install and run this project on your local machine, follow these steps:

1. Clone this repository onto your machine
2. Navigate to the project directory in your terminal
3. Run 'npm install' to install all the required dependencies
4. Create a Firebase project, create Email Authentication, add the users from the seed.js file (existing email and a password you choose)
5. Copy the new userIds from the Authentication page and change the userIds in seed.js file
6. Go to "Web" on your Firebase's main page, copy the config data and pase it in the const config in the src/lib/service-lib.js file
7. Uncommnet the following two lines of code to seed the database (only once):
* seedDatabase(firebase)
* import { seedDatabase } from "../seed"
8. Run 'npm start' to start the project on your local machine
9. Make sure you comment/delete the two lines of code in section 7 before running the project again
