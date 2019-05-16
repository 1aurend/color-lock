## LL Color Lock Tutorial
### Welcome to React!

[React](https://reactjs.org/) is a js library for building UI. React code is written in JSX, which is an extension of js that allows it to describe elements of the DOM. See [here](https://reactjs.org/docs/introducing-jsx.html) for the official word on JSX. I also highly recommend the tic-tac-toe tutorial in the official React docs if you really want to dig in and learn React.

The two coolest things about React for the LL are (1) it allows us to write modular bits of code called components that we can use again and again and (2) because it's for building UI, it puts interactivity at the center. So let's get started!

This tutorial will teach you core React concept through building a colorful keypad lock. If you checkout the master branch of this repo (enter `git checkout master` in terminal), install dependencies if you haven't already (`npm install --save`), and run `npm start`, you can see a working version of the lock.

To start, you'll want to checkout the starter-code branch (`git checkout starter-pack`). This branch contains a blank React app, which is what we'll be working from. You'll notice that our repo contains two folders: public and src. The public folder contains just a single file *index.html*. You might also notice that this html file is pretty empty. There's some header info, but the body of our page contains only a single div called 'root'. That's because React is going to take the JSX we write in our js files and use it to dynamically update the html that lives in that root div.

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
You'll notice this code looks a lot like our code for Lock. The main difference you might spot is the use of *className=* inside our *button* tag. This is the JSX version of class in html, so this simply tells us that our button's styling is defined by the css class 'colorbutton'.

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
Most of this is just divs that form our grid. See the css file. But you'll see we're now rendering our component Button inside Lock. In fact we're rendering it three times. You can add several more buttons inside the lockbox div to see what happens. Hooray! We've created a reusable module of code. We only had to write Button once and can render it as many times as we want. `git checkout reuse-components` to see the code so far.

Before we start thinking about how our lock will function, we'll finish building the initial look of our lock keypad. This will introduce the essential React concept of *props*. Props, short for properties, are passed from parent components to children to tell the children what to render. What does that mean? Well, for our color lock, we want to render nine buttons each of which is a different color. We're not going to write a new Button component for each button. Instead, when Lock renders Button we're going to pass it a color as a prop and our button will become that color.

To see this in action, change one of your `<Button />` tags in Lock to `<Button color='blue' />` or any color you like. Then, over in *Button.js*, we'll do two things. First, we'll get our Button component to receive props by putting props as the input to our arrow function: `const Button = (props) => {`. Then we'll update our button element to `<button className='colorbutton' style={{backgroundColor: props.color}}>I'm a button</button>`. Save your files and check your browser. You should see that one of your buttons has changed color!

So what did we just do? First, when we rendered our component Button, we passed it a prop. We named that prop color by using 'color='. We could have named our prop anything; call your props unicorns if you want to, but descriptive names are more helpful as component trees get more complex. Then we passed the props object (this object is part of the react library) to Button by putting props as the input to our function. As an object, we access the values of props using regular old dot notation (or square bracket notation if you prefer). So, for example, if you log `props.color` here, you will get the color you passed in. Then we added some JSX inline styling. JSX handles inline styles using 'style='. Any css properties you put after style= will show up in this DOM element.

Now there are two things you might be wondering about: What's with the double curly brackets? And why is backgroundColor not background-color? In JSX, curly braces indicate that the code inside is js. So here, we have double curly braces because the first set indicate that what's inside is js and what's inside is a js object, which itself is signaled by curly braces, hence the second set. As for backgroundColor, React uses camelCase versions of css properties rather than dashes, but otherwise it's the same thing.

Now is a good moment to play around with changing the other buttons to familarize yourself with how passing props works. We can use our same component to render a button of any color simply by passing in that color when we use the component. `git checkout passing-props` has the code to this point.

Okay, now that you have the idea of props, we'll finish creating our buttons. In *Lock.js*, add the following constant inside the function but above the return statement:
```
const buttons = [
    {id: 1, color: '#512DA8',},
    {id: 2, color: '#FFC107',},
    {id: 3, color: '#E91E63',},
    {id: 4, color: '#C2185B',},
    {id: 5, color: '#2196F3',},
    {id: 6, color: '#4CAF50',},
    {id: 7, color: '#CDDC39',},
    {id: 8, color: '#FF5722',},
    {id: 9, color: '#00BCD4',},
  ]
  ```
You can change these colors to anything you like to personalize your lock. Each object in this array represents one of the nine buttons on our keypad. For now, we're just giving them two properties, (1) an id number that we'll use later to identify which button have been pressed, and (2) a color.

Now we could render each of our buttons with a separate component tag like so `<Button id={buttons[0].id} color={buttons[0].color} />`, but that's a lot to type. Instead, since our button properties are already in a nice array, we'll use a map function. Replace the three Button tags in Lock with the following: `{buttons.map(button => {return (<Button id={button.id} color={button.color} />)})}` Notice that once again we've enclosed our js in curly brackets, since it's inside our JSX.

To tidy things up, we'll also remove the "I'm a button labels from our buttons", though of course you are free to label your buttons however you wish. You might even want to see if you can add a name field to the buttons array and see if you can render each button with a different name. We'll also add the instruction "Enter the code" above our lock by inserting the following div into Lock above lockcontainer:
```
<div id='locktitle'>
  <h2>Enter the code...</h2>
</div>
```
Okay-that's our basic lock! `git checkout basic-lock` to see the code up to this point. We've also now covered functional components, parent-child relations, and passing props. We're now ready to start making our lock interactive.

At this point, the tutorial forks into two paths (kind of like a choose your own adventure??). If you continue to follow this set of instructions, you'll build your lock using a new React addition called [Hooks](https://reactjs.org/docs/hooks-intro.html), which allow us to use state variables in our functional components. If instead you `git checkout class-components`, you'll build your lock using a class component and `this.state`. Both work: classes and binding this can be confusing; hooks are new and can't yet do absolutely everything classes can. Take your pick.

We're going to use the hook `useState()`. This hook allows us to create state variables without using this. (If you don't know what this is, don't worry about it! How nice is that?!) You can think of state variables as variables that are created inside a function but yet persist after the function has run. This is contrary to normal function variable scopes, where the variables are not defined outside of the function. Because state variables persist, React can compare their previous values to new values each time our function, our functional component, runs and determine whether or not to re-render. Again, that's a lot of words. Let's try it out!

We implement `useState()` by declaring what might be a weird looking constant inside our Lock function. I put mine at the top just above the array of button colors, but it doesn't matter exactly where you put it as long as you declare it before your `return` statement:
```
const [pressed, onPress] = useState(
    {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
    }
  )
```
So what's this all about? Definitely check out the link to the official documents on Hooks above, but the basic idea is that the function `useState()` takes the destructured array and (1) assigns an initial value to the first, so in this case the variable pressed gets our object with numerical keys as its value, and (2) creates a function that updates that variable named the second item in the array. So now we can call `onPress()` and whatever we put in the parentheses will become the new value of pressed. Cool, right?

Of course, if you check in your browser, you will once again see no change. We now need to write some code that makes what we see on the screen change in response to changes in the value of `pressed`. The first thing we'll do is pass a click handler to our Button component. That's just a fancy way of saying, we'll give Button something to do when someone clicks on it. Our click handler is this:
```
onClick={() => {
  onPress((pressed) => ({...pressed, [button.id]: true}))
  console.log(pressed);
}}
```
We also need a way of telling Button whether or not it has already been pressed and so to render accordingly. We'll do this by passing Button one more prop, namely its state variable:
```
pressed={pressed[button.id]}
```
Both of these go inside our map function that triggers Button. That whole bit of code should now look like this:
```
{buttons.map(button => {return (<Button key={button.id} color={button.color} onClick={() => {
  onPress((pressed) => ({...pressed, [button.id]: true}))
  console.log(pressed);
}} pressed={pressed[button.id]} />)})}
```
Sweet! Now our buttons know what to do when clicked on and whether or not they've been pressed... but they still don't do anything. (If you check your browser console, you'll see that we're logging out pressed, though, and that state updates every time you click on a button.) Enter conditional rendering. I know, I know, another funny React term. But this is an important one. What it means is that we're going to give our component Button two different `return` statements enclosed in an `if...else`. If our condition is met, our button will look one way, if the condition is false, it will look another. I bet you can guess what that condition is-- whether `pressed` is true or false for that button. So we'll change the function in our Button component to this:
```
const Button = (props) => {

  if (!props.pressed) {
    return (
      <button className='colorbutton' style={{backgroundColor: props.color}} onClick={props.onClick}></button>
    )
  }

  else if (props.pressed) {
    return (
      <button className='colorbutton' style={{border: '5px solid white', backgroundColor: props.color}} onClick={props.onClick}></button>
    )
  }

}
```
You might want to compare this to the previous version to make sure you understand what's going on here. We've essentially made two copies of our initial `return` and enclosed them in conditionals. The only difference in what we return is that if `props.pressed` is true, the button will now have a white board to indicate it has been pressed. Check your browser to try it out. Neat!
