import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Caixa from "./details"
import "./details.css"
import Cartao from "./Header"
import Footer from "./rooter"
import "./Header.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cartao/>
      <Caixa/>
      <Footer/>
    </>
  )
}



export default App
