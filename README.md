# Happy Thoughts

In this week's project, you'll be able to practice your React state skills by fetching and posting data to an API.

We've built a simple API to collect 'happy thoughts'. The end result should look like this:

![Design](https://i.imgur.com/3Zi1Kl4.png)

To achieve this, we've built an API with three endpoints:

### Fetch recent thoughts

`GET https://technigo-thoughts.herokuapp.com/`

This will return the latest 20 thoughts from the API, looking something like this:

```json
[
  {
    "_id": "5dd671c864cc480017f40979",
    "message": "I'm happy because we're starting a fun new project",
    "hearts": 0,
    "createdAt": "2019-11-21T11:15:20.888Z",
    "__v": 0
  },
  {
    "_id": "5dd6759064cc480017f4097a",
    "message": "I just ate a super tasty lunch",
    "hearts": 0,
    "createdAt": "2019-11-21T11:31:28.547Z",
    "__v": 0
  }
]
```

### Create a thought

`POST https://technigo-thoughts.herokuapp.com/`

Send a POST request with a JSON body like this:

```json
{
  "message": "My happy thought"
}
```

If the request was successful and a thought was added, you'll get a response which looks like this:

```json
{
  "_id": "123456",
  "message": "My happy thought",
  "hearts": 0,
  "createdAt": "2019-11-21T11:31:28.547Z",
  "__v": 0
}
```

The message you send is validated - it must be present, and be between 5 and 140 characters long. If it fails these validations, you'll get a response with detailed error information, which you could use to show a friendly error to the user (see stretch goals).

### Like a thought

`POST https://technigo-thoughts.herokuapp.com/THOUGHT_ID/like`

When the user clicks the heart button on a thought, send a POST request (with no body) to this url. **Replace THOUGHT_ID with the `_id` parameter of the thought the user clicked on**

## What you will learn 🧠

* How to use APIs in React, firing requests within `useEffect`.
* How to put the result of API responses into React state to show in the page.
* What it's like to work with an API which you both send and receive data from.

## How to get started 💪🏼

1. Fork this repo
2. Clone this repo into your projects folder on your computer
3. Open up VS Code
4. In the terminal, run `cd code` to change into the code folder
5. Install the dependencies needed for react by running `npm install`
6. Run the react development server by running `npm start`

## Hints and tips to complete the project 🤓

A good idea before you start writing code is to sketch out what kind of components you need, what their responsibility should be, and what kind of state you'll need. This will help you to have a clearer idea of what code you need to write. Once you've done that, a good idea is to start with listing the thoughts which are already in the API. Then move on to building a form to post a new thought, and finally implement the heart button on an existing thought.

When you submit the form to add a new thought, the API returns the new thought object in the same way it would look if it was part of the full list response. You can use this to avoid having to send a second API request to fetch all thoughts again after submitting a new thought. See the [react documentation](https://reactjs.org/docs/hooks-reference.html#usestate) for a more detailed explanation of adding an object to an existing array in state, but in a nutshell, you'll want to do something like this:

```js
// Assuming you have this kind of state in your component:
const [thoughts, setThoughts] = useState([]) 

// Later, in your code which handles the form submission, you 
// could have something which looks like this to send the new 
// message, get the response from the API, and then add it to 
// the thoughts array:
const handleFormSubmit = (event) => {
  event.preventDefault()

  // Send the POST request with the input from your form (instead
  // of 'Hello world' like this example does):
  fetch('https://technigo-thoughts.herokuapp.com/', { 
    method: 'POST', 
    body: JSON.stringify({ message: 'Hello world' })
  })
    .then((res) => res.json())
    .then((newThought) => {
      // Now you have `newThought` which is the response from the
      // API as documented at the top of this readme. You can use
      // it to update the `thoughts` array: 
      setThoughts((previousThoughts) => [newThought, ...previousThoughts])
    })
}
```

## Requirements 🧪

* Your page should follow the design as closely as possible
* You should list the most recent thoughts
* You should have a form to post new thoughts
* You should implement the heart button to send likes on a thought
* Code follows Technigo’s code guidelines.
* Contribute by helping others with this project on Stack Overflow.
* If selected; demo your solution for your team.

## How to hand in the code 🎯

* When you’re finished with the project, push your code to GitHub with these commands:

  ```
  git add .
  git commit -m "your commit message"
  git push origin master
  ```

* Navigate to your repo and create a Pull Request into the Technigo repo (Add a link to your deployed project.)
* Wait for the code review from your teachers

## How to get help 🆘

Ask for help and share your knowledge about this project with the '[TAG]' tag on [Stack Overflow](https://stackoverflow.com/c/technigo/questions). Talk to your team on Slack and help each other out. Do some research about your problem, you are surely not the first one with this problem, Google is your friend 🙂. And you can of course also book a tech call. 

## Stretch Goals 🏃‍♂

Below are some ideas for improvements you could make to the app. Feel free to pick from these, or come up with other features you think would be nice. 

Make sure you've commited and pushed a version of your project before starting with the stretch goals.

**_Show error message when validation fails_**

When POSTing a new thought, if the message was empty, too long, or too short, you get an error message back from the API. You could use this to set some sort of `error` state to show a friendly message to your user.

**_Show remaining character limit_**

Posts must be shorter than 140 characters. You could show a count below the form input when updates as the user types and shows how many characters are remaining. It could go red when the user has typed over 140 characters.

**_Show the number of times you've liked a post_**

The API does not limit how many times a user clicks the heart button. You could keep count of how many times they have, and display it in some way. You could even go as far as to store this number in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so that when the page is reloaded, the initial state can be set from the number you've stored.

...

#### 🚨 Don't forget to add, commit and push the changes to GitHub when you're done. 🏁
