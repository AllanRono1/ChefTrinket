import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import './App.css'

function App() {

  const [ingredientsList, setIngredientsList] = React.useState(["oregano", "thyme", "seasoning"])
  const list = ingredientsList.map((item) => {
    return <li>{item}</li>
  })

  function addIngredient() {
    setIngredientsList([...ingredientsList], newItem)
    setNewItem()
  }

  function postIngredient(formData) {
    const input = formData.get('input')
    console.log(input)
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
