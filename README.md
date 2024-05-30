# BrainBuddies
## Development Plan
- by 14june - frontend of homepage (including like and dislike buttons, appearance of others' profiles) + location page
- by 24june - matching algorithm
- by 28june - chatting functionality 
- by milestone 2 - testing

## Level of Achievement
Apollo 11

## Project Scope
BrainBuddies is an app that allows students to match with other like-minded students to study together.

## Problem Motivation
In university, it is often hard to make friends, especially when classes are so structured and do not facilitate student interaction. As such, many university students struggle to find people to study with in school.

## Basic Solution Description & Impact
The app allows students to meet students from other faculties, expanding their social circle and friends that they can study with.

## Proposed Core Features + User Stories
As a student, I want to register an account in BrainBuddies.

- User registration and authentication
- Profile creation and editing

## Use Cases
### 1. User Registration
Student: New user
Goal: To create a new account on the BrainBuddies platform
Precondition: None
Postcondition: A new user account is created with a unique email address and password

### 2. User Login
Student: Existing user
Goal: To log in to their existing account on the BrainBuddies platform
Precondition: A user account already exists with a valid email address and password
Postcondition: The user is authenticated and redirected to their profile or dashboard

### 3. Profile Creation
Student: Authenticated user
Goal: To create a personal profile with basic information
Precondition: The user is logged in
Postcondition: A profile is created with the user's first name, last name, university, course, and year of study

### 4. Profile Editing
Student: Authenticated user
Goal: To edit their personal profile with updated information
Precondition: The user is logged in and has a profile
Postcondition: The user's profile is updated with the new information

## How the app works
It uses Firebase for authentication and data storage. The main purpose of the application is to provide a platform for students to find study partners, share resources, and collaborate on assignments.
The application consists of two main screens: the "Welcome" screen and the "Stack" screen. The "Welcome" screen is displayed when the user first opens the application or when they are not logged in. It contains a login form where the user can enter their email address and password to sign in.
Once the user is logged in, they are redirected to the "Stack" screen, which contains various features such as profile creation, search for study partners, messaging system, and resource sharing. The "Stack" screen is a navigation container that hosts multiple screens, each with its own functionality.
The application uses the Firebase Authentication system to handle user registration, login, and session management. It also uses the Firebase Firestore database to store user data and profile information.
The application uses the React Navigation library to manage the navigation between the different screens and to provide a smooth and responsive user interface.

## System Design
![systemdiagram1](https://github.com/chenxy12345/Orbital24-6554/assets/156636799/999a2d2c-9834-48d8-9660-3b30f3e97c01)


## Technologies Used
- React Native for the mobile application
- Firebase for authentication, database, and cloud storage
- Expo for easy deployment and testing


## Getting Started
To get started with the BrainBuddies project, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running npm install or yarn install.
3. Set up a Firebase project and configure it in the firebaseConfig.js file.
4. Run the application using npm start or yarn start.

