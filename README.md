## Welcome to React!

[React](https://reactjs.org/) is a js library for building UI. React code is written in JSX, which is an extension of js that allows it to describe elements of the DOM. See [here](https://reactjs.org/docs/introducing-jsx.html) for the official word on JSX. I also highly recommend the tic-tac-toe tutorial in the official React docs if you really want to dig in and learn React.

The two coolest things about React for the LL are (1) it allows us to write modular bits of code called components that we can use again and again and (2) because it's for building UI, it puts interactivity at the center. So let's get started!

This tutorial will teach you core React concept through building a colorful keypad lock. If you checkout the master branch of this repo (enter `git checkout master` in terminal), install dependencies if you haven't already (`npm install --save`), and run `npm start`, you can see a working version of the lock.

To start, you'll want to check out the starter-code branch (`git checkout starter-pack`). This branch contains a blank React app, which is what we'll be working from. You'll notice that our repo contains two folders: public and src. The public folder contains just a single file *index.html*. You might also notice that this html file is pretty empty. There's some header info, but the body of our page contains only a single div called 'root'. That's because React is going to take the JSX we write in our js files and use it to dynamically update the html that lives in that root div.

To get a sense of how this works, let's look in src. There you'll see a file called *index.js*. It contains this line of code `ReactDOM.render(<Lock />, document.getElementById('root'));` (plus some import statements). Essentially, what that line of code says is find the component called 'Lock', which we will write in a minute, see what it says should appear on the screen based on the current state (a concept we'll cover later) and put the corresponding html in the root div. Okay, okay-- that's a mouthful. Let's make the component 'Lock' to see how this works.

First, let's make a new file called *Lock.js* and put it in the components folder. For now we're going to create the simplest of components. At top we need to import React, so our webpack (the compiler that turns JSX into html) knows that this is a React script. So, the first line in our file should be `import React from 'react'`. Then we'll make a component by simply defining a constant: `const Lock = () => {return <p>look! a component!</p>}` Notice that the name of this component is capitalized. React treats capitalized elements as components and lowercase ones like div as elements of the DOM. Finally, we need to export our component `export default Lock`. So our whole file *Lock.js* should look like this:
```
import React from 'react'

const Lock = () => {return <p>look! a component!</p>}

export default Lock
```

Save the file and then if you check in your browser, you should see whatever message you typed in Lock appear on the screen. You can also `git checkout first-component` to see the code thus far.

But okay, you say, that was a lot of work for some text. Very true! To see the power of composition, let's make another component. We'll call this one Button. In the components folder, make a new file *Button.js*. Add this code to that file:
```
import React from 'react'

const Button = () => {
  return (
    <button className='colorbutton'>I'm a button</button>
  )
}

export default Button
```
You'll notice this code looks a lot like our code for Lock. The main difference you might spot is the use of *className=* inside our `button` tag. This is the JSX version of class in html, so this simply tells us that our button's styling is defined by the css class 'colorbutton'.

Now, if you look back in your browser (you might need to hit `npm start` again if you stopped the app), you'll notice... nothing! Why? Well, we created the component Button, but we haven't rendered it anywhere in the DOM. To do that, we'll need to make some changes to our component Lock because Lock is going to be the parent component of all our buttons.

First, we'll import Button so we can call it: `import Button from './Button.js'` It's standard to group all your import statements at the top of the page. So we'll also import our css there as well: `import './lock.css'` Then, we need to change our Lock component from a constant to a functional component, that is a function that returns (literally a description of) a section of the DOM. So, we'll start by changing Lock into a function like so:
```
function Lock() {
  return (
    <p>look! a component!</p>
    )
}
```
Everything should look just as before in the browser. This function is equivalent to our earlier constant defined as arrow function. But now we'll change what this function returns. Replace the content of the return statement with:
```
<div id='pagegrid'>
  <div id='lockcontainer'>
    <div id='lockbox'>
      <Button />
      <Button />
      <Button />
    </div>
  </div>
</div>
```
Most of this is just divs that form our grid. See the css file. But you'll see we're now rendering our component Button inside Lock. In fact we're rendering it three times. You can add several more buttons inside the lockbox div to see what happens. Hooray! We've created a reusable module of code. We only had to write Button once and can render it as many times as we want.
