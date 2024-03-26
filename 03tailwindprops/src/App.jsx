import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // let myObj = {
  //   username: "Binod",
  //   age: 25
  // }

  // let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400  text-black  p-3 rounded-xl mb-3'>Tailwind test</h1>
      
      <Card/>
      <Card username = "Filiya"  btnText = "click me"/>
      <Card username = "Alisa"  btnText = "visit me"/>
      
    </>
  )
}

export default App
