import { useState } from 'react'
import { CalProvider } from './context/CalContext'
import Screen from './components/Screen'
import Functioning from './components/Functioning'

function App() {
  const [result, setResult] = useState(0)
  const [prevCalculation, setPrevCalculation] = useState('')
  const [calculation, setCalculation] = useState('')

  return (
    <CalProvider
      value={{
        result,
        setResult,
        calculation,
        setCalculation,
        prevCalculation,
        setPrevCalculation,
      }}
    >
      <div className='app'>
        <Screen />
        <Functioning />
      </div>
    </CalProvider>
  )
}

export default App
