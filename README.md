# **NebulaNova**

**NebulaNova** is an **_API Rest_** dedicated to real _gamers_. If you like the videogame world with our api you will be able to:

- **Create your own collection of video games:** Adding games from an external API that has a large catalog.
- **Create your own custom lists:** From the games added to your library you can create all kinds of lists sorting your games by genre, platform, favorites, 90's, etc.
- **Write your own reviews:** Share your opinion and experiences with other users and rate your games with a maximum of 5 points.
- **Add other users as friends:** Increase your friendship network with people like you, sharing your passion for the gamer world.
- **Get badges:** The API has different badges that through an app you can reward users.

## THE TEAM

- Airam Guedes Gonzalez - https://github.com/Airamgg99
- Aythami Báez Ruano - https://github.com/AythamiBR
- Samuel Falcón Alonso - https://github.com/ThesniperDev

## TECHNOLOGIES

- **_Node.js_**
- **_Express.js_**
- **_Sequelize_**
- **_JavaScript_**
- **_MySQL_**
- **_IGDB API_**

## AUTHORIZATION

Once you have registered in the API you will be able to be:

- **Administrator:** You have all the power in your hands. You will be able to add, update or delete any game from the API DB, you will be able to remove and update the reviews of all users and, for the moment, you will be able to reward users with bages and thank them for their contributions.
- **Registered users:** You will be able to create your game collection, sort your games in all kinds of lists, which you can manage as you wish, write your own reviews and rate your games and of course add other users of the community to be part of your friends.

If you decide not to register, don't worry, at least you will be able to see the games that are in our database and read the reviews of our users.

## IGDB API

To use this API, you need to refer to the IGDB API documentation: https://api-docs.igdb.com/#getting-started

- First of all, you need to follow the steps outlined in the Account Creation section to obtain the Client ID and Client Secret
- Then, you have to obtain the access token by using a POST method to the URL provided in the Authentication section
- Finally, you need to include the Client ID and access token obtained in the previous step in the .env file

## REQUIREMENTS

- Nodejs
- Database configuration(create a .env file -> Set up the environment variables you are going to use)
- Save the token you have obtained from the external API (follow the steps from the previous section)

## INSTALLATION

To get started with the Game Tracker API, just get into the repo and run:

```
$ npm i
```

## USAGE

To start the api server just run:

```
$ npm run dev
```

## DATA STRUCTURE AND MODELS

![Screenshot from 2024-03-07 15-58-39](https://github.com/ThesniperDev/NebulaNova/assets/42233569/b8f03f5b-dbdf-4f47-98d8-8aaf99156c1f)

## ENDPOINTS

### User

| METHOD | ENDPOINT          | TOKEN | ROLE | DESCRIPTION                       | POST PARAMS | RETURNS                            |
| ------ | ----------------- | ----- | ---- | --------------------------------- | ----------- | ---------------------------------- |
| POST   | /signup           | NO    | -    | Allows you to sign up in the app  | -           | -                                  |
| POST   | /login            | NO    | -    | Allows you to log in the app      | -           | -                                  |
| GET    | /users            | YES   | User | Gets all users in the app         | -           | [{ user }]                         |
| GET    | /friend           | YES   | User | Show you all your added friends   | -           | [{ user }]                         |
| POST   | /friend/:friendId | YES   | User | Allows you to add a user a friend | friendId    | "Now 'user' and you are friends"     |
| DELETE | /friend/:friendId | YES   | User | Deletes a specific friend         | friendId    | "Now 'user' and you are not friends" |

## Game

| METHOD | ENDPOINT | TOKEN | ROLE  | DESCRIPTION                           | POST PARAMS | RETURNS                            |
| ------ | -------- | ----- | ----- | ------------------------------------- | ----------- | ---------------------------------- |
| GET    | /        | NO    | -     | Gives you the games on the database   | -           | [{ game }]                         |
| GET    | /:id     | NO    | -     | Gives you a specific game             | id          | { game }                           |
| POST   | /        | YES   | Admin | Adds a game from the API if necessary | req.body    | { game }, "Game created succesfully" |
| PUT    | /:id     | YES   | Admin | Updates a chosed game's information   | id +  req.body | { game }, "Game updated"             |
| DELETE | /:id     | YES   | Admin | Deletes an existing game              | id          | { game }, "Game deleted succesfully"  |

## GameCollection/userGame

| METHOD | ENDPOINT | TOKEN | ROLE  | DESCRIPTION                                                           | POST PARAMS    | RETURNS                            |
| ------ | -------- | ----- | ----- | --------------------------------------------------------------------- | -------------- | ---------------------------------- |
| GET    | /        | YES   | User  | Gives all games in the user's game collection                         | -              | [{ game }]                         |
| GET    | /:id     | YES   | User  | Gives you a specific game from the user's game collection             | id             | { game }                           |
| POST   | /        | YES   | User  | Adds a game to the user's game collection                             | req.body       | { game }, "Game created"           |
| PUT    | /:id     | YES   | User  | Updates a chosed game to the user's game collection                   | id +  req.body | { game }, "${title game} has been updated" succesfully" |
| DELETE | /:id     | YES   | User  | Deletes an existing game to the user's game collection                | id             | { game }, "${title game} has been deleted successfully" |

## Gamelist

| METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION                           | POST PARAMS   | RETURNS                                                 |
| ------ | ---------------- | ----- | ---- | ------------------------------------- | ------------- | ------------------------------------------------------- |
| GET    | /:listId         | YES   | User | Gives all user's list                 | listId        | [{ list }]                                              |
| GET    | /:listId/:gameId | YES   | User | Gives you a game from a specific list | listId/gameId | { game }                                                |
| POST   | /:listId         | YES   | User | Adds a game from the API if necessary | listId + req.body.title (game)| "${title game} is already on the list"  |
| DELETE | /:listId/:gameId | YES   | User | Deletes a game from a list            | listId/gameId | { game } , "${title game} has been deleted successfully"|


## List

| METHOD | ENDPOINT | TOKEN | ROLE | DESCRIPTION                         | POST PARAMS | RETURNS                            |
| ------ | -------- | ----- | ---- | ----------------------------------- | ----------- | ---------------------------------- |
| GET    | /        | YES   | User | Gives you all your lists            | -           | [{ lists }]                        |
| GET    | /:id     | YES   | User | Gives you a specific list           | id          | { list }                           |
| POST   | /        | YES   | User | Creates a list                      | req.body    | { list }, "List created succesfully" |
| PUT    | /:id     | YES   | User | Updates a chosed list's information | id          | { list }, "List updated succesfully" |
| DELETE | /:id     | YES   | User | Deletes an existing list            | id          | { list }, "List deleted correctly"   |

## Badge

| METHOD | ENDPOINT | TOKEN | ROLE  | DESCRIPTION                          | POST PARAMS | RETURNS                    |
| ------ | -------- | ----- | ----- | ------------------------------------ | ----------- | ---------------------------|
| GET    | /        | YES   | User  | Gives you all badges                 | -           | [{ badge }]                |
| GET    | /:id     | YES   | User  | Gives you a specific badge           | id          | { badge }                  |
| POST   | /        | YES   | Admin | Adds a badge                         | req.body    | { badge }                  |
| PUT    | /:id     | YES   | Admin | Updates a chosed badge's information | id          | { badge }, "Badge updated" |
| DELETE | /:id     | YES   | Admin | Deletes an existing badge            | id          | "Badge removed"            |

## Userbadges

| METHOD | ENDPOINT      | TOKEN | ROLE  | DESCRIPTION                          | POST PARAMS | RETURNS                         |
| ------ | ------------- | ----- | ----- | ------------------------------------ | ----------- | --------------------------------|
| GET    | /             | YES   | User  | Gives you all user´s badges          | -           | [{ userbadges }]                |
| GET    | /:badgeId     | YES   | User  | Gives you a specific user´s badge    | badgeId          | { userbadge }                   |
| POST   | /             | YES   | Admin | Adds a badge to a user               | req.body    | { userBadge }, "Badge added"    |
| DELETE | /:badgeId     | YES   | Admin | Deletes a badge to a user            | BadgeId          | "User badge removed"            |

## Review

| METHOD | ENDPOINT         | TOKEN | ROLE  | DESCRIPTION                   | POST PARAMS      | RETURNS                     |
| ------ | ---------------- | ----- | ----- | ----------------------------- | ---------------- | --------------------------- |
| GET    | /all             | NO    | -     | Gives you all reviews         | -                | [{ reviews }]               |
| GET    | /:reviewId       | NO    | -     | Gives you a specific review   | reviewId         | { review }                  |
| PUT    | /admin/:reviewId | YES   | Admin | Updates a specific review     | /admin/:reviewId | Review updated, 'id review' |
| DELETE | /admin/:reviewId | YES   | Admin | Deletes you a specific review | /admin/:reviewId | Review deleted, 'id review' |

## Usereview

| METHOD | ENDPOINT   | TOKEN | ROLE | DESCRIPTION                        | POST PARAMS | RETURNS                             |
| ------ | ---------- | ----- | ---- | ---------------------------------- | ----------- | ----------------------------------- |
| GET    | /          | YES   | User | Gives all user's reviews           | /           | [{ review }]                        |
| GET    | /:reviewId | YES   | User | Gives you a specific user's review | reviewId    | { review }                          |
| POST   | /:gameId   | YES   | User | Creates a review                   | gameId      | { review }, Review created          |
| PUT    | /:reviewId | YES   | User | Updates a review                   | reviedId    | { review }, Review has been updated |
| DELETE | /:reviewId | YES   | User | Deletes a review                   | reviewId    | Review deleted , 'id review'        |
