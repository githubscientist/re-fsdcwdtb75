import { useState } from "react"

const App = () => {

  // Dynamic List Rendering
  // Keys in React
  let fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          fruits.map((fruit, index) => <li key={index}>{ fruit }</li>)
        }
      </ul>
    </div>
  )
}

export default App