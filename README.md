## Welcome to React!

[React](https://reactjs.org/) is a js library for building UI. React code is written in JSX, which is an extension of js that allows it to describe elements of the DOM. See [here](https://reactjs.org/docs/introducing-jsx.html) for the official word on JSX.

The two coolest things about React for the LL are (1) it allows us to write modular bits of code called components that we can use again and again and (2) because it's for building UI, it puts interactivity at the center. So let's get started!

This tutorial will teach you core React concept through building a colorful keypad lock. If you checkout the master branch of this repo (enter `git checkout master` in terminal), install dependencies if you haven't already (`npm install --save`), and run `npm start`, you can see a working version of the lock.

To start, you'll want to check out the starter-code branch (`git checkout starter-code`). This branch contains a blank React app, which is what we'll be working from. You'll notice that our repo contains two folders: public and src. The public folder contains just a single file *index.html*. You might also notice that this html file is pretty empty. There's some header info, but the body of our page contains only a single div called 'root'. That's because React is going to take the JSX we write in our js files and use it to dynamically update the html that lives in that root div.

To get a sense of how this works, let's look in src. There you'll see a file called *index.js*. It contains this line of code `ReactDOM.render(<Lock />, document.getElementById('root'));` (plus some import statements). Essentially, what that line of code says is find the component called 'Lock', which we will write in a minute, see what it says should appear on the screen based on the current state (a concept we'll cover later) and put the corresponding html in the root div. Okay, okay-- that's a mouthful. Let's make the component 'Lock' to see how this works.

First, let's make a new file called *Lock.js* and put it in the components folder.
