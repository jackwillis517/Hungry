# Hungry
## Overview
### Hungry is a food suggestion app where a user can store, create and be given ideas about what they want to eat next. Our app aims to solve the "What do I want to eat?" question in a simple way. You can think of this app as a dating app for food.

---
## Getting Started Guide

### **Dependencies**
#### Please install the following dependencies in ```Hungry\backend``` before running the app with the following commands:
    npm install express dotenv express-async-handler bcryptjs jsonwebtoken mongoose cors cloudinary

    npm install -D nodemon

#### Please install the following dependencies in ```Hungry\frontend``` before running the app with the following commands:
    npm install bootstrap reactstrap react-router-dom axios @reduxjs/toolkit react-redux react-toastify

### **Starting the Frontend & Sever**
#### While in the ```Hungry\backend``` folder run the following:
    npm run server

#### While in the ```Hungry\frontend``` folder run the following:
    npm start

### **Basic App Use**
#### Hungry has three major components to it that we will discuss each in detail, these three are:
1. The Cookbook
2. The Random Food Idea Generator
3. Menus

The _Cookbook_ is where all food ideas given from the idea generator or inputed manually are stored

_Menus_ serve as food playlists where specific genres of food for specific locations, events or seasons can be stored together
1. Create a new menu with a title and description
2. From your cookbook add items to specific menus

The _Random Food Idea Generator_ is where random food ideas are suggested which can then be added to ones cookbook and various menus

---
## App Structure

### For our application we opted to use the MERN stack with Redux for state management and Cloudinary for media storage and manipulation. This stack was selected mainly because of its ease of use and abundance of infomation for learning. Our application is a simple CRUD app and doesn't require anything too unique.
### **Frontend**
#### All the webpages for the app are in the _pages_ folder, a majority of the react components in this folder each correspond to a frontend page. The few components that follow are not standalone pages and are subcomponents for major components:
1. _Navbar component_: this component is the navbar that is used on all other webpages each with minor alterations
2. _Food Card component_: this is a generic food item card that is used in the Food Suggester, Cookbook and Modify Existing Menu components
3. _Menu Card component_: similar to the Food Card component, the Menu Card is a generic menu card that is used in the Menus Dashboard component

#### In this project we used React Router for page routing, all the routes for pages are in ```App.js```
### **Backend**
#### Major directories of the backend file system:
1. Config
2. Controllers
3. Middleware
4. Models
5. Routes

**Config:** configurations for accessing the database

**Controllers:** when a endpoint for the api is accessed from the frontend these items control what happens

**Middleware:** these items control what happens between a request and response to/from the database

**Models:** these items control how data is stored in the mongo database

**Routes:** when the frontend makes a request routes determines which controller to use

Sever.js is the main file for the backend system

## Testing
### To log into the backend database services go to Cloudinary and MongoDB's websites and use the following credentials:
#### Username: nolanwillis38@gmail.com
#### Password: Murphy911!

### IMPORTANT: In mongoDB be sure to navigate to the Network Access page and add your current IP address, if you don't you'll get an error when you run: npm run server.

#### If you run into any problems getting this working please email me at: nwillis@syr.edu. MongoDB can be a little over protective at times. Oh and this is my personal mongoDB account, please don't mess with the other projects.

---

##### Hungry's Creators: Conner Gurnham, Fabian Ponce De Leon, William Seeley, Robert Ward, Jack Willis & Nolan Willis
