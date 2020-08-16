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

[Sequence Diagram Create Event Link](https://wire-dev-tools.mybluemix.net/sequence/?d=Title%3A+Create+Secret+Santa+Gift+Exchange+Event%0AUser--%3EUser+Interface%3A+Click+Create+button%0AUser+Interface--%3EUser%3A+Display+Exchange+Page%0AUser--%3EUser+Interface%3A+Enters+Data+and+Submit%0AUser+Interface--%3EUser+Interface%3A+Validates+Data%0ANote+right+of+User+Interface%3A+If+error%2C+display+message%0AUser+Interface--%3EServer+API%3A+Calls+create+event+API%0AServer+API--%3EServer+API%3A+Validates+Data%0ANote+right+of+Server+API%3A+If+error%2C+return+with+error%0AServer+API--%3EDatabase%3A+Save+new+event%0ADatabase--%3EServer+API%3A+Saved+event%0AServer+API--%3EUser+Interface%3A+Saved+event+json%0AUser+Interface--%3EUser+Interface%3A+Show+success+message%0AUser+Interface--%3EUser%3A+Redirect+to+list+of+events+page%0A++++++++++++&t=simple)

**Flow to Invite Guest to Exchange Event**

<img src="./imgs/readme/invite-guest.svg">

[Sequence Diagram Invite Guest](https://wire-dev-tools.mybluemix.net/sequence/?d=Title%3A+Invite+Guest+to+Exchange+Event%0AUser--%3EUser+Interface%3A+Click+Invite+button+%0AUser+Interface--%3EUser%3A+Display+Invite+Page%0AUser--%3EUser+Interface%3A+Enters+Data+and+Submit%0AUser+Interface--%3EUser+Interface%3A+Validates+Data%0ANote+right+of+User+Interface%3A+If+error%2C+display+message%0AUser+Interface--%3EServer+API%3A+Calls+send+invite+API%0AServer+API--%3EServer+API%3A+Validates+Data%0ANote+right+of+Server+API%3A+If+error%2C+return+with+error%0AServer+API--%3EDatabase%3A+Save+new+invite%0ADatabase--%3EServer+API%3A+Saved+invite%0AServer+API--%3EEmail+Platform%3A+Send+invite+email%0AServer+API--%3EUser+Interface%3A+Saved+invite+json%0AUser+Interface--%3EUser+Interface%3A+Show+success+message%0AUser+Interface--%3EUser%3A+Redirect+to+the+event+page&t=simple)

**Flow to Track Invitations**

<img src="./imgs/readme/track-invitations.svg">

[Sequence Diagram Track of Invitations](http://wire-dev-tools.mybluemix.net/sequence/?d=Title%3A+User+Keep+Track+of+Invitations%0AUser--%3EGuest%3A+Sends+Invite+Email+through+System%0AGuest--%3EEmail%3A+Clicks+link+on+email+invite%0AEmail--%3EUser+Interface%3A+Open+accepting+page%0AGuest--%3EUser+Interface%3A+Clicks+accept+invite%0AUser+Interface--%3EServer+API%3A+Calls+accept+invite+API%0AServer+API--%3EServer+API%3A+Validates+Data%0ANote+right+of+Server+API%3A+If+error%2C+return+with+error%0AServer+API--%3EDatabase%3A+Update+guest+invite+to+accepted%0ADatabase--%3EServer+API%3A+Saved+guest+invite%0AServer+API--%3EEmail+Platform%3A+Send+thanks+for+accepting+invite+and+calendar+reminder+email%0AServer+API--%3EUser+Interface%3A+Saved+guest+json%0AUser+Interface--%3EUser+Interface%3A+Show+success+message%0AUser+Interface--%3EGuest%3A+Asks+to+login+or+register+for+account%0ANote+right+of+Guest%3A+Only+logged+in+guests+can+add+gift+ideas%0AUser--%3EUser+Interface%3ASee+List+of+Guests%0AUser+Interface--%3EServer+API%3A+Calls+list+guests+API%0AServer+API--%3EDatabase%3A+Get+guest+list+w%2F+status%0ADatabase--%3EServer+API%3A+List+of+guests+w%2F+status%0AServer+API--%3EUser+Interface%3A+List+of+guests+w%2F+status%0AUser+Interface--%3EUser%3A+Display+guests+with+status&t=simple)

**Flow to Manually Assign Gift Exchange Guests**

<img src="./imgs/readme/guest-assign-manual.svg">

[Sequence Diagram Manually Assign Gift Exchange Guests](http://wire-dev-tools.mybluemix.net/sequence/?d=Title%3A+User+Manually+Assign+Gift+Exchange+Guests%0AUser--%3EUser+Interface%3A+Click+Assign+Exchange+Guests+button%0AUser+Interface--%3EUser%3A+Display+Assign+Exchange+Guests+Page%0AUser--%3EUser+Interface%3A+Select+guest+and+gifting+guest%2C+click+save%0AUser+Interface--%3EUser+Interface%3A+Validates+Data%0ANote+right+of+User+Interface%3A+If+error%2C+display+message%0AUser+Interface--%3EServer+API%3A+Calls+assign+exchange+guest+API%0AServer+API--%3EServer+API%3A+Validates+Data%0ANote+right+of+Server+API%3A+If+error%2C+return+with+error%0AServer+API--%3EDatabase%3A+Assign+gifting+guest+to+guest%0ADatabase--%3EServer+API%3A+Saved+guest%0AServer+API--%3EEmail+Platform%3A+Send+email+to+gifting+guest+with+assignment+details%0AServer+API--%3EUser+Interface%3A+Saved+guest+json%0AUser+Interface--%3EUser+Interface%3A+Show+success+message&t=simple)

**Flow to use System to Auto Assign Gift Exchange Guests**

<img src="./imgs/readme/guest-assign-system.svg">

[Sequence Diagram System Assign Gift Exchange Guests](http://wire-dev-tools.mybluemix.net/sequence/?d=Title%3A+System+Auto+Assign+Gift+Exchange+Guests%0AUser--%3EUser+Interface%3A+Click+Assign+Exchange+Guests+button%0AUser+Interface--%3EUser%3A+Display+Assign+Exchange+Guests+Page%0AUser--%3EUser+Interface%3A+Select+system+auto+assignment%0AUser+Interface--%3EUser+Interface%3A+Validates+Data%0ANote+right+of+User+Interface%3A+If+error%2C+display+message%0AUser+Interface--%3EUser+Interface%3A+Confirms+this+will+override+previous+assignments%0AUser+Interface--%3EServer+API%3A+Calls+auto+assign+guests+API%0AServer+API--%3EServer+API%3A+Validates+Data%0ANote+right+of+Server+API%3A+If+error%2C+return+with+error%0A%0AServer+API--%3EDatabase%3A+Assign+gifting+guest+to+guest%0ADatabase--%3EServer+API%3A+Saved+guest%0AServer+API--%3EEmail+Platform%3A+Send+email+to+gifting+guest+with+assignment+details%0AServer+API--%3EUser+Interface%3A+Saved+guest+json%0AUser+Interface--%3EUser+Interface%3A+Show+success+message&t=simple)

**Flow for Guests to Add Gift Ideas**

<img src="./imgs/readme/guest-gift-ideas.svg">

[Sequence Diagram Guest Adds Gift Ideas](http://wire-dev-tools.mybluemix.net/sequence/?d=Title%3A+Guest+Adds+Gift+Ideas%0AGuest--%3EUser+Interface%3A+Guest+click+Events+Invitations+List%0AUser+Interface--%3EServer+API%3A+Calls+get+guest+events+API%0AServer+API--%3EDatabase%3A+Read+guest+events%0ADatabase--%3EServer+API%3A+Events+List%0AServer+API--%3EUser+Interface%3A+Events+List+json%0AUser+Interface--%3EGuest%3A+Display+Page+with+list+of+events+user+is+invited+as+guest%0AGuest--%3EUser+Interface%3A+Select+an+event+to+edit+gift+ideas%0AUser+Interface--%3EServer+API%3A+Calls+get+gift+ideas+details+API%0AServer+API--%3EDatabase%3A+Reads+gifts+ideas+for+event%0ADatabase--%3EServer+API%3A+Gifts+idea%0AServer+API--%3EUser+Interface%3A+Gifts+ideas+json%0AUser+Interface--%3EGuest%3A+Display+page+with+gifts+ideas%0AGuest--%3EUser+Interface%3A+Edit+ideas%0AGuest--%3EUser+Interface%3A+Search+for+ideas%0AUser+Interface--%3EServer+API%3A+Call+search+gifts+API%0AServer+API--%3EAmazon%3A+Search+gifts%0AServer+API--%3EUser+Interface%3A+List+of+products%0AUser+Interface--%3EGuest%3A+Display+gifts+results%0AGuest--%3EUser+Interface%3A+Pick+one+or+more+gifts%0AGuest--%3EUser+Interface%3A+Save+gifts+ideas%0AUser+Interface--%3EUser+Interface%3A+Validates+Data%0ANote+right+of+User+Interface%3A+If+error%2C+display+message%0AUser+Interface--%3EServer+API%3A+Calls+Save+gifts+ideas%0AServer+API--%3EServer+API%3A+Validates+Data%0ANote+right+of+Server+API%3A+If+error%2C+return+with+error%0AServer+API--%3EDatabase%3A+Save+gifts+ideas%0ADatabase--%3EServer+API%3A+Saved+gifts+ideas%0AServer+API--%3EEmail+Platform%3A+Send+email+to+gifting+guest+with+ideas+details%0AServer+API--%3EUser+Interface%3A+Success+result%0AUser+Interface--%3EUser+Interface%3A+Show+success+message&t=simple)

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
  - System offers option to do a random assignment
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
- [Erik De Luna](https://github.com/CodingErik)

---

[Table of Contents](#table-of-contents)
