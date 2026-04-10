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

  function handleClick(event) {
    event.preventDefault()
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    const input = formData.get('input')
    console.log(input)
    formEl.reset()
  }

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleClick} method="POST" className='input-container'>
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
