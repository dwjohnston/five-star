# Five-Star - A React Five Star Rating Widget

## The Important Stuff (How to get it running)

You need three terminal windows. 

Compile and run the packages in this order.

**1. common**

This is a common package that contains type definitions that are used by both the frontend and backend. 

```
npm i && npm start
```

To run compile in watch mode. 

**2. backend**

This is a REST API running ExpressJS against a MongoDB database. 

You need to populate a `.env` file (gitignored) with MongoDB authentication details. 

Then : 

```
npm i && npm start
```

**3. frontend** 

This is a straight-forward React app created with Create-React-App

```
npm i && npm start
```


## Tech Stack

Backend: 

 - NodeJs
 - TypeScript
 - ExpressJS
 - MongoDB

Frontend:

 - React (Using functional components and hooks)
 - TypeScript
 - Material-UI (CSS/Component Lookfeel)
 - React-Loads (For loading flags)
 - Lodash (For one specific debouncing function)

## Documentation 

Throughout the code the following documentation conventions are used: 

```
  // and /* */ comments  - Standard coding comments. 

  //TODO - Highlights where some additional functionality needs to be added. 

  //@DesignNote - See these notes in conjunction with the Design Philosophy notes below. 

```

## Functionality 

To be clear, the follow functionality is _not_ provided: 

- Any user authentication or action persistence on the backend. 

### Backend 

The backend has two endpoints 

`GET /content`

Get all the content, with their average rating, in format: 

```
[
    {
        contentId: number; 
        rating: number; 
    }
]
```

**nb.** *If the content has no ratings it will return an average of 3.*

*No other smoothing functionality for small sample sizes is provided*

`POST /content/:id/rating`

Post a rating of the format: 

```
{
    contentId: number; 
    userId: number; 
    rating: 1|2|3|4|5; 
}

```

⚠️ **nb.** No deduping/replacing functionality is provided for when the same user submits multiple ratings for the same content. This functionality to be provided in later releases. 

### Frontend

1. Fetches all the content and displays it in a list. 

2. The content panels have a five star rating to the left displaying the average rating, rounded to the nearest whole number. 

3. The content panels have a five star rating selector, allowing the user to submit their own rating. This selector is only enabled if a user object is present. 

4. There is a dummy user object on the frontend, which appears after 4000ms, which is for the purpose of demonstrating the attachment of the user ID to submit rating request. 

## Other things needing tidy up

- Pull hard coded variables/magic numbers out into constant variables
- Delete unused dependencies, unused CSS. 
- Possibly want some improved CSS on the star selector - ie. to differentiate between hover and selected stars. 


## Design Philosophy 

### Testing 

My general approach for writing code, and tests, especially for writing new code (where there aren't patterns established) is: 

1. Write the code and get the thing working. Work out the things that need to be done. 
2. Start writing tests. Find that writing the tests are hard. 
3. Refactor the code to make writing the tests easy. 



### Error Handling 

#### TypeScript interfaces

TypeScript is super useful in preventing type errors as you write your code, if you can trust that the value being passed into your function really does match the type declared. 

Where this can be problematic, is when data comes from the result of an API or database query. 

eg: 

```
        app.post("/content/:id/rating", async (req, res) => {
            const rating = req.body as Rating; 
    ...
```

Here, when the client submits something to this POST endpoint, we want to assume that it was correctly of the `Rating` type, and then write the rest of our code with that assumption. 

However, it's possible that the data submitted to this endpoint wasn't the correct format. 

The problem with just writing a type coercion like this - is that some code further down the line doesn't know that the format is wrong, and won't handle it. (And save some incorrectly formatted data to the database for example). 

The solution I'm demonstrating, is to write functions that will take data that is of unknown shape, and attempt to turn it into the correct format. If the shape is not correct at that point, it throws an error at that stage. 

['Fail Early'](https://stackoverflow.com/questions/2807241/what-does-the-expression-fail-early-mean-and-when-would-you-want-to-do-so) design philosophy. 


#### Backend 

Using Express error handlers. 

https://expressjs.com/en/guide/error-handling.html

### Frontend 

#### State-Management, Loading Flags

My goto state management is usually redux and redux-saga, and I use [this approach](https://medium.com/stashaway-engineering/react-redux-tips-better-way-to-handle-loading-flags-in-your-reducers-afda42a804c6) for doing loading flags. 

But that can be a lot of boilerplate, and so for this I've played around with using [react-loads](https://www.npmjs.com/package/react-loads) instead. 

#### Separation of State and Display

A design philsophy I've been playing around with, is how you should be able to change your state management framework of choice easily (ie. from redux to mobx to graphql), without having to rewrite all of your react components. 

To achieve this, you would write your main display components accepting props like: 

- data
- isLoading
- error
- onClick/onSubmit

and then it's a matter of passing those values in from whatever state management library you are using. 



#### Function currying to making the Rating Component reusable 

For the rating component, in this case, when we submit a rating, there are three pieces of data we need: `contentId`, `userId` and `ratingValue`. 

However, the `contentId` and `userId` values are arbitrary to this use case only, it's conceivable that you might be reusing the rating component else where, where there is a different set of values that need to be submitted. 

To achieve this, I've taken an approach of passing a [curried function](https://stackoverflow.com/questions/36314/what-is-currying) to the Rating Component. That is - the function that is passed to the Rating Component already has the data about the `userId` and `contentId` included by the functions closure, it just needs the `ratingValue` to be given to it by the Rating Component. 


