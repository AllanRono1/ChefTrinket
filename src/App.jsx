import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <div className='input-container'>
          <input type="text" />
          <button>Add ingredient</button>
        </div>
      </main>
    </>
  )
}

export default App
