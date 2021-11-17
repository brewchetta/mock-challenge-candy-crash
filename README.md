# Candy Crash

(I made this in an hour so please don't be angry with the quality!)

Your task is to build out the rest of the Candy Crash app that allows people to log and rate candies. You already have the components you'll need, we just need to add the functionality.

## Getting Started

Run the app with `npm start` and run the database server with `npm run server`. The endpoint you'll be using is `http://localhost:4001`.

## Core Deliverables

1. Show the list of all candies in the `CandyList` container.
2. The like button toggles between `Like` and `Unlike` when clicked. This change doesn't have to persist.
3. When the `NewCandyForm` is submitted, it adds a new candy to the list on the front end and makes a `POST` request to add it to the database.
4. The `CandySearch` accepts input that filters the candies based on the name that was typed in.

## Making Fetches

You'll be making requests to `http://localhost:4001/candies`.

For the POST request you can use these headers:

```
headers: {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}
```

## Advanced Deliverables

Add a `delete` button to the CandyCard which deletes it from both the db.json and removes the card.

Candies are sorted alphabetically by name.
