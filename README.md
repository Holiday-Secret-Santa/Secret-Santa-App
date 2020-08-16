# Secret Santa App

<p align="center">
 <img src="imgs/readme/appLogo.png" alt="secret santa app logo" width="400px">
</p>

---

## Table of Contents

- [Project Description](#project-description)
- [Reference Links](#reference-links)
- [User Story](#user-story)
- [Concept](#concept)
- [Design](#design)
  - [Actions Diagram](#actions-diagram)
  - [Sequence Diagrams](#sequence-diagrams)
  - [ER Diagram](#er-diagram)
  - [Wireframes](#wireframes)
- [Application MVP](#application-mvp)
- [Technologies](#technologies)
- [Installation](#installation)
- [Team Members](#team-members)

---

## Project Description

The 2020 holiday season is quickly approaching! This Secret Santa App will help your orchestrate the holiday fan-favorite game, Secret Santa! With this app, the user will be able to do the following:

- Schedule a date for the secret santa gift exchange event
- Invite family and friends to join in on the holiday fun
- Keep track of who accepted the secret santa invite
- Discretely assign a single participant to each individual registered for the event
- Allow participants to create a list of gift ideas they would like to recieve

---

## Reference Links

Link to GitHub Repo used for application development- [https://github.com/Holiday-Secret-Santa/Secret-Santa-App](https://github.com/Holiday-Secret-Santa/Secret-Santa-App)

Link to Project Board used for application development - [https://github.com/Holiday-Secret-Santa/Secret-Santa-App/projects/1](https://github.com/Holiday-Secret-Santa/Secret-Santa-App/projects/1)

---

## User Story

```
AS a user who needs to organize a secret santa gift exchange
I WANT to be able to use an online application
SO THAT I can prepare an awesome holiday event for friends and family
```

---

## Concept

_App concept placeholder _

## Design

### Actions Diagram

The flow chart below outlines the basic functionality of the secret santa app.

![Secret Santa App Flow Chart](./imgs/readme/conceptMap.png)

### Sequence Diagrams

Sequence of events for the all key MVP features. Visualize interaction between the different components of the application.

**Flow to Create Secret Santa Gift Exchange Event**

<img src="./imgs/readme/create-event.svg">
[Sequence Diagram Create Event Link](http://wire-dev-tools.mybluemix.net/sequence/?d=Title%3A+Create+Secret+Santa+Gift+Exchange+Event%0AUser--%3EUser+Interface%3A+Click+Create+button%0AUser+Interface--%3EUser%3A+Display+Exchange+Page%0AUser--%3EUser+Interface%3A+Enters+Data+and+Submit%0AUser+Interface--%3EUser+Interface%3A+Validates+Data%0ANote+right+of+User+Interface%3A+If+error%2C+display+message%0AUser+Interface--%3EServer+API%3A+Calls+create+event+API%0AServer+API--%3EServer+API%3A+Validates+Data%0ANote+right+of+Server+API%3A+If+error%2C+return+with+error%0AServer+API--%3EDatabase%3A+Save+new+event%0ADatabase--%3EServer+API%3A+Saved+event%0AServer+API--%3EUser+Interface%3A+Saved+event+json%0AUser+Interface--%3EUser+Interface%3A+Show+success+message%0AUser+Interface--%3EUser%3A+Redirect+to+list+of+events+page%0A++++++++++++&t=simple)

**Flow to Invite Guest to Exchange Event**

<img src="./imgs/readme/invite-guest.svg">
[Sequence Diagram Invite Guest] (http://wire-dev-tools.mybluemix.net/sequence/?d=Title%3A+Invite+Guest+to+Exchange+Event%0AUser--%3EUser+Interface%3A+Click+Invite+button+%0AUser+Interface--%3EUser%3A+Display+Invite+Page%0AUser--%3EUser+Interface%3A+Enters+Data+and+Submit%0AUser+Interface--%3EUser+Interface%3A+Validates+Data%0ANote+right+of+User+Interface%3A+If+error%2C+display+message%0AUser+Interface--%3EServer+API%3A+Calls+send+invite+API%0AServer+API--%3EServer+API%3A+Validates+Data%0ANote+right+of+Server+API%3A+If+error%2C+return+with+error%0AServer+API--%3EDatabase%3A+Save+new+invite%0ADatabase--%3EServer+API%3A+Saved+invite%0AServer+API--%3EEmail+Platform%3A+Send+invite+email%0AServer+API--%3EUser+Interface%3A+Saved+invite+json%0AUser+Interface--%3EUser+Interface%3A+Show+success+message%0AUser+Interface--%3EUser%3A+Redirect+to+the+event+page&t=simple)

### ER Diagram

The entity relationship **(ER) diagram** below provides a visual representation of how the data is saved inside the application's back-end database. This diagram also demonstrates the relationship between each database table.

_ER Diagram here_

### Wireframes

Once available, all whiteboard designs will be listed under this section.

---

## Application MVP

Here is a list of the MVP requirements for this app. Please note that these are the same core functionality items listed in the project description section.

- The User can _register_, _login_ and _logout_
- The User can schedule a date for the secret santa gift exchange event
- The User can invite family and friends to join in on the holiday fun
- The User can keep track of who accepted the secret santa invite
- The User can discretely assign a single participant to each individual registered for the event
- The System allows participants to create a list of gift ideas they would like to recieve

---

## Technologies

Here is a list of the core technologies we plan to use for the development of this application. Please note that this list may change throughout the development of the application.

### Core Technologies

- HTML
- JavaScript
- CSS
- Bootstrap _(team will choose at a later date)_
- React.js
- Node.js _(specific packages will be identifed at a later date)_
- Mongo or SQL _(team will choose at a later date)_
- Moment.js
- Email platform (Mailchim, Mailgun, ...) _(team will choose at a later date)_

---

## Installation

Once available, this section will be updated to include installation instructions.

---

## Team Members

- [Krystal Duran](https://github.com/KEDuran)
- [Yadira Tamarit](https://github.com/ystamaritq)
- [Joshua Martinez](https://github.com/JDMartinez1531)
- [Joshua Martinez](https://github.com/JDMartinez1531)
- [Erik ](https://github.com/CodingErik)

---

[Table of Contents](#table-of-contents)
