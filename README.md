# Wilks - a Discord Clone

Wilks is a full stack web application based on the popular chat app Discord. Using Ruby on Rails for the backend, PostgreSQL for the database, React/Redux for the frontend.


# Overview

  - Wilks uses Ruby on Rails to provide a JSON API for our frontend to interact with
  - All of the frontend files are kept in the `/frontend` folder, which hooks into the root element provided by Rails

# Features and Implementation

### User Auth
 - Users can create a new account, as well as log in to previously made accounts. Don't have time to make a new account? Guest login is available for a brief overview of how the app works.

### Team and Channel actions
 - Users can create and delete teams as an `owner`, and they can also join and leave teams as a `member`
 - Users can also create and join `channels`, which belong to `teams`

### Information at your fingertips
 - As soon as the chat component mounts, all of the information relevant to you is loaded and viewable immediately

### Channel Messages
 - Users can create new messages which get posted to the channel that they were in

### Responsive Design
 - Using the actual Discord app as inspiration, the overall design of the site is appealing and all of the components work the way you'd think they would.
 - Using many modals and dropdowns, the site feels good to use

## Ideas for Future improvements

### Websockets
 - Was not able to implement websockets in time, but the framework is laid down to be easily implemented usng ActionCable
 - Not only does this allow live messaging, but this allows message notifications as well as sign-in/sign-out notifications

### Friends
 - Users will be able to add friends to easily be able to communicate with the people they want to communicate with

### Direct Messaging
 - Don't want everyone to see what you're saying? Take it to a direct message, where only you and the other person will be able to see the messages

### Edit profile picture/team logos
 - Using a hosting service such as AWS or Cloudinary, users will be able to upload their own images to use for their profile pictures/team logos
 
### Post images
 - Users will be able to upload and post images to chat channels

### Splash Page
 - A splash page with an intro of what the app does when you first visit the site
