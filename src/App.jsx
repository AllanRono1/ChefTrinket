import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import './App.css'

function App() {

  const [ingredients, setIngredients] = React.useState([])
  const list = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>
  })

  function postIngredient(formData) {
    const input = formData.get('input')
    console.log(input)
    setIngredients(prevIngredients => [...prevIngredients, input])
  }

  return (
    <>
      <Header />
      <main>
        <form action={postIngredient} className='input-container'>
          <input type="text"
          placeholder='eg. basil'
          name='input'/>
          <button>Add ingredient</button>
        </form>
        <ul>
          {list}
        </ul>
      </main>
    </>
  )
}

export default App
