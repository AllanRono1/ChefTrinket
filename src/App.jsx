import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Generate from './components/Generate'
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
        <section>
          <form action={postIngredient} className='input-container'>
            <input type="text"
            placeholder='eg. basil'
            name='input'/>
            <button>Add ingredient</button>
          </form>
          {ingredients.length < 4 &&<p className='prerequisite'>Add atleast 4 ingredients</p>}
          <ul>
            {list}
          </ul>
        </section>
        {ingredients.length > 3 && <Generate />}
      </main>
    </>
  )
}

export default App
