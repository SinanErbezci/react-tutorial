import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const user = {
  name: "Sinan",
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: "apple", id:1},
  { title: "bread", id:2},
];

const listItems = products.map(product => 
  <li key={product.id}>
    {product.title}
  </li>
);

function MyButton() {
  // count => current state, setCount => func that updates it
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    alert("You clicked me!");
  }
  return(
    <button onClick={handleClick} className='new-button'>Count is {count}</button>
  );
}


function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <MyButton/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h1>{user.name}</h1>
        <img
          className='avatar'
          src={user.imageUrl}
          alt={'photo of' + user.name} 
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        <ul>{listItems}</ul>
      </div>
    </>
  )
}

// Conditional Rendering
// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />
// } else {
//   content = <LoginForm />
// }
// return (
//   <div>
//   {content}
//   </div>
// )

{/* <div>
  {isLoggendIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
   */}
export default App
