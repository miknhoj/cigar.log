# Cigar.Log - WDI: Project 3

## Overview
Cigar.Log is THE app to help you keep track of the cigars you enjoy. You can create a username and add cigars to your cigar log. For each cigar you can note the many different attributes that make a cigar unique. It is a full-stack MERN applicantion that has full CRUD on two models. 


## Project Links
* [Deployed Heroku](https://cigar-log.herokuapp.com/)
* [Trello Board](https://trello.com/b/8nB93YEe/unit-3-cigarlog)
* [Data Model](https://www.lucidchart.com/invitations/accept/5c131087-549f-4543-bc50-285f6678e5b3)
* [Wire Frame](https://www.figma.com/file/ZqA27yTS4wrwMOlAzB5mBPil/CIgar.log?node-id=0%3A1)


---
## The Process

For this project, I spent a lot of time planning the project out and it helped me reach the minimum viable product (mvp) very quickly. I wrote out my own Trello board from scratch and it helped to go step by step to conceptually understand the steps I would need to take to reach mvp. I worked on the backend first - setting up my routes and acheiving full CRUD on both the user and cigar modals. I utilized Postman to test that all the routes were working. Then I worked on the client side with React where I ran into a lot of issues. After lots of trails, peer input, and instructor guidance, I was able to get full CRUD on the front end. I attempted a couple a reach goals on the last day before presentation, but was unable to successfully implement them into my project. I wanted a sort button that would sort the cigars in the log by rating. I also tried adding modals from material-ui to my for forms, but did have enough time to work out the bugs so I had to roll it back to my mvp for presentation. The last day I worked on styling my project. I wanted to note that the [Color Theme](https://coolors.co/f9e49f-fccf5d-f9a05c-118293-21373d) I chose was Charizard, which I thought was fitting. I used the paper and button from material-ui to get some exposure to the css library. 

## Something Cool

Using ternary operators is a great way to simplify your code. For this project I used ternary operatorss several times in conjunction with toggle methods to render different components. A very handy and cool tool!

---
## Technologies Used
* HTML5
* CSS
* Material-UI
* NodeJS
* Express
* React
* MongoDB
* Mongoose
* Postman
* MongoDB Compass
---
## Shout Outs

## POSTMAN!
Daniel, Andrew, MOON!(finding all my stupid syntax errors), Taylor, Lauren, Emmy, Ivy, Gouda, Qing (Awesome set up instructions), basically the back table, Evening TA's James and William.

---
## Final Thoughts and Version 2.0

Planning is very important regardless of the size of the project. Even for a simple project like this one, investing in the planning process will help prevent you from getting lost and keep you on a path that will help you to acheive the goal. 

For the next version I would like to continue working on a few additional features that I couldn't quite get to work in this version: 
* a sort method that will sort the cigars in my log by the rating I give it.
* a 3rd party API (Google or cigar vendor) so that the user can search a cigar that they enjoyed to purchase it
* modals - tried using the modals in material ui, but had some issues. Would like to get forms to show up on a modal.