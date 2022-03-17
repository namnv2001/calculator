import { useState } from 'react'
import { CalProvider } from './context/CalContext'
import Screen from './components/Screen'
import Functioning from './components/Functioning'

function App() {
  const [result, setResult] = useState(0)
  const [calculation, setCalculation] = useState('')
  const [prevCalculation, setPrevCalculation] = useState('')
  const [mode, setMode] = useState('app')

  return (
    <CalProvider
      value={{
        mode,
        result,
        setMode,
        setResult,
        calculation,
        setCalculation,
        prevCalculation,
        setPrevCalculation,
      }}
    >
      <div className={mode}>
        <Screen />
        <Functioning />
      </div>
    </CalProvider>
  )
}

export default App
