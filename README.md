# **NebulaNova**


**NebulaNova** is an **_API Rest_** dedicated to real _gamers_. If you like the videogame world with our api you will be able to:
* **Create your own collection of video games:** Adding games from an external API that has a large catalog.
* **Create your own custom lists:** From the games added to your library you can create all kinds of lists sorting your games by genre, platform, favorites, 90's, etc.
* **Write your own reviews:** Share your opinion and experiences with other users and rate your games with a maximum of 5 points.
* **Add other users as friends:** Increase your friendship network with people like you, sharing your passion for the gamer world.
* **Get badges:** The API has different badges that through an app you can reward users.

## THE TEAM
* Airam Guedes Gonzalez   - https://github.com/Airamgg99
* Aythami Báez Ruano      - https://github.com/AythamiBR
* Samuel Falcón Alonso    - https://github.com/ThesniperDev

## TECHNOLOGIES
* **_Node.js_**
* **_Express.js_**
* **_Sequelize_**
* **_JavaScript_**
* **_MySQL_**
* **_IGDB API_**

## AUTHORIZATION
Once you have registered in the API you will be able to be:
* **Administrator:** You have all the power in your hands. You will be able to add, update or delete any game from the API DB, you will be able to remove and update the reviews of all users and, for the moment, you will be able to reward users with bages and thank them for their contributions.
* **Registered users:** You will be able to create your game collection, sort your games in all kinds of lists, which you can manage as you wish, write your own reviews and rate your games and of course add other users of the community to be part of your friends.

If you decide not to register, don't worry, at least you will be able to see the games that are in our database and read the reviews of our users.

## DATA STRUCTURE AND MODELS






![Screenshot from 2024-03-07 15-58-39](https://github.com/ThesniperDev/NebulaNova/assets/42233569/b8f03f5b-dbdf-4f47-98d8-8aaf99156c1f)


## ENDPOINTS

### User

| METHOD | ENDPOINT                  | TOKEN  | ROLE         | DESCRIPTION                               | POST PARAMS                | RETURNS                               |
| ------ | ------------------------- | ------ | ------------ | ----------------------------------------- | -------------------------- | ------------------------------------- |
| POST   | /signup                   | NO     | -            | Allows you to sign up in the app          | -                          | -                                     |
| POST   | /login                    | NO     | -            | Allows you to log in the app              | -                          | -                                     |
| GET    | /users                    | YES    | User         | Gets all users in the app                 | -                          | [{ users }]                           |
| GET    | /friend                   | YES    | User         | Show you all your added friends           | -                          | [{ friends }]                         |
| POST   | /friend                   | YES    | User         | Allows you to add a user a friend         | friendId                   | Now 'user' and you are friends        |
| DELETE | /friend                   | YES    | User         | Deletes a specific friend                 | friendId                   | Now 'user' and you are not friends    |


## Game

| METHOD | ENDPOINT                  | TOKEN  | ROLE         | DESCRIPTION                               | POST PARAMS                | RETURNS                               |
| ------ | ------------------------- | ------ | ------------ | ----------------------------------------- | -------------------------- | ------------------------------------- |
| GET    | /                         | NO     | -            | Gives you the games on the database       | -                          | [{ games }]                           |
| GET    | /                         | NO     | -            | Gives you a specific game                 | id                         | { game }                              |
| POST   | /                         | YES    | Admin        | Adds a game from the API if necessary     | -                          | { game }, Game created succesfully    |
| PUT    | /                         | YES    | Admin        | Updates a chosed game's information       | id                         | { game }, Game updated                |
| DELETE | /                         | YES    | Admin        | Deletes an existing game                  | id                         | { game }, Game deleted sucesfully     |


## List

| METHOD | ENDPOINT                  | TOKEN  | ROLE         | DESCRIPTION                               | POST PARAMS                | RETURNS                               |
| ------ | ------------------------- | ------ | ------------ | ----------------------------------------- | -------------------------- | ------------------------------------- |
| GET    | /                         | YES    | User         | Gives you all your lists                  | -                          | [{ lists }]                           |
| GET    | /                         | YES    | User         | Gives you a specific list                 | id                         | { list }                              |
| POST   | /                         | YES    | User         | Creates a list                            | -                          | { list }, List created succesfully    |
| PUT    | /                         | YES    | User         | Updates a chosed list's information       | id                         | { list }, List updated succesfully    |
| DELETE | /                         | YES    | User         | Deletes an existing list                  | id                         | { list }, List deleted correctly      |

## Badge

| METHOD | ENDPOINT                  | TOKEN  | ROLE         | DESCRIPTION                               | POST PARAMS                | RETURNS                               |
| ------ | ------------------------- | ------ | ------------ | ----------------------------------------- | -------------------------- | ------------------------------------- |
| GET    | /                         | YES    | User         | Gives you all your badges                  | -                          | [{ badge }]                          |
| GET    | /                         | YES    | User         | Gives you a specific badge                 | id                         | { badge }                            |
| POST   | /                         | YES    | Admin        | Adds a badge                               | -                          | { badge }                            |
| PUT    | /                         | YES    | Admin        | Updates a chosed badge's information       | id                         | { badge }, Badge updated             |
| DELETE | /                         | YES    | Admin        | Deletes an existing badge                  | id                         | Badge removed                        |

















