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

JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>..x.</div> or an empty <>...</> wrapper:

# Adding Styles
you specify CSS class with className.
```
<img className="avatar" />
```

# Displaying Data
Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. 

