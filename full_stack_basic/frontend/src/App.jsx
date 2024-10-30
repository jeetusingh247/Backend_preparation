import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes').then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })
  return (
    <>
      <h1>My Full Stack Project</h1>
      <p>Jokes : {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
          </div>
        ))
      }  
    </>
    // proxy is a better solution for cors issue
  )
}

export default App
