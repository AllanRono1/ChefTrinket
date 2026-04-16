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
        <section>
          <form action={postIngredient} className='input-container'>
            <input type="text"
            placeholder='eg. basil'
            name='input'/>
            <button>Add ingredient</button>
          </form>
          </section>
          <section>
          {ingredients.length < 4 &&<p className='prerequisite'>Add atleast 4 ingredients</p>}
          {ingredients.length > 0 && <h1 className='ingredients-header'>Your list of ingredients:</h1>}
          <ul>
            {list}
          </ul>
          <div className='generate'>
            <p>Whip up your next meal</p>
            <button>Get a recipe</button>
          </div>
        </section>
        <section>
          <h1 className='recipe-title'>Your recipe:</h1>
          <p>Prepare the Chicken: Season the chicken pieces with salt, pepper, turmeric, and half of the paprika.
            Sear the Chicken: Heat olive oil/ghee in a large pot or Dutch oven over medium-high heat. Sear the chicken until golden brown (about 3-4 minutes per side). Remove chicken from the pot and set aside (it does not need to be fully cooked).
            Sauté Aromatics: Reduce heat to medium. Add onions to the same pot and sauté until translucent (about 5 mins). Add garlic, ginger, and hot chilli. Cook for another minute until fragrant.
            Add Spices & Tomatoes: Add the remaining paprika and cumin powder. Toast for 30 seconds. Stir in the tomatoes (and their juices) and cook for 2-3 minutes until they begin to break down.
            Simmer Stew: Return the chicken to the pot. Add the potatoes and broth. Bring to a boil, then reduce heat to low, cover, and simmer for 10 minutes.
            Add Rice: Stir in the washed rice, ensuring it is submerged in the liquid. Cover tightly and simmer for another 15-20 minutes, or until the rice is fluffy, potatoes are tender, and chicken is cooked through.
            Finish: If the stew is too thin, simmer uncovered for 5 more minutes. If too thick, add a splash of broth. Taste and adjust salt/chilli.
            Serve: Garnish with fresh cilantro and serve hot.</p>
        </section>
      </main>
    </>
  )
}

export default App;
