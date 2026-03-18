# Creating and nesting components
React apps are made out of components. Components are a piece of the UI with own logic and apperance.

They are JS functions that return markup:
```
function Mybutton() {
    return (
        <button>I'm a button.</button>
    );
}
```
Now you can nest it into another component.
```
export default function MyApp(){
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    )
}
```
<MyButton /> starts with a capital letter that's how you know it's React component.

export default specify the main component in the file.

JSX is stricter than HTML. You have to close tags like br /. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a div..x./div or an empty <>...</> wrapper:

# Adding Styles
you specify CSS class with className.
```
<img className="avatar" />
```

# Displaying Data
Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. 

```bash
npm cresate vite@latest my-app
cd my-app
npm install
npm run dev
```

# Tic-tac-Toe Project
```js
export default function Square()
```
- App.js -> Creating components.
- index.js -> bridge between components and browser
- export -> makes this function accessible outside of file
- default -> tells other files using your code it's the main function of the file
- JSX -> javascript + HTML

React components need to return a single JSX element and not multiple adjacent JSX elements like two buttons. To fix this you can use Fragments (<> and </>) to wrap multiple adjacent JSX elements like this:
```js
return (
    <>
    <button></button>
    <button></button>
    </>
)
```
## Passing Value
By default, all child components re-render automatically when the state of a parent component changes.

To fix this, you will use **props** to pass the value each square should have from the parent component (Board) to its child (Square).
```js
function Square({value}){
    return <button>{value}</button>
}
```
- {value} -> Indicates it can take prop value name as value
- {} -> curly braces in JSX indicates "escapte into Javascript"

React provides a special function called **useState** that you can call from your component to let it “remember” things. 

value stores the value and setValue is a function that can be used to change the value. The null passed to useState is used as the initial value for this state variable, so value here starts off equal to null.

To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead. The parent component can pass that state back down to the children via props. This keeps the child components in sync with each other and with their parent.

Immutability makes complex features much easier to implement. Later in this tutorial, you will implement a “time travel” feature that lets you review the game’s history and “jump back” to past moves. This functionality isn’t specific to games—an ability to undo and redo certain actions is a common requirement for apps. Avoiding direct data mutation lets you keep previous versions of the data intact, and reuse them later.