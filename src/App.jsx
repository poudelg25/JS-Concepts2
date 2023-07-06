import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const products = [{name: 'Chiros', price: 4.99, quantity: 2}, {name: 'Bread', price: 2.49, quantity: 4}, {name: 'CocoWater', price: 1.99, quantity: 15}]
  const [count, setCount] = useState(0)

  function calculateTotalPrice(products){
    const totalPrice = products.price * products.quantity
    return totalPrice

  }

  function printProductInfo(products){
    console.log("Product Name: ", products.name)
    console.log("Product Price Rate: ", products.price)
    console.log("Product Quantity: ", products.quantity)
    console.log("Product Total Price: ", calculateTotalPrice(products))
  }
printProductInfo(products[2])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
