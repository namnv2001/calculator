import { useContext } from 'react'
import CalContext from '../../context/CalContext'
import styles from './style.module.css'
import Button from '../Button'

function Functioning() {
  const { setResult, setCalculation, setPrevCalculation, calculation } =
    useContext(CalContext)

  const number = (number) => {
    setCalculation((calculation) => calculation + number)
  }

  const method = (method) => {
    setCalculation((calculation) => calculation + method)
  }

  const deleteLast = () => {
    setCalculation((calculation) => calculation.slice(0, -1))
  }

  const clear = () => {
    setCalculation('')
    setPrevCalculation('')
    setResult(0)
  }

  const calculate = () => {
    const result = eval(calculation)
    setResult(result)
    setPrevCalculation(calculation)
    setCalculation(result.toString())
  }

  return (
    <div className={styles.grid}>
      <Button value={'C'} handleClick={clear} type={'method'} />
      <Button value={'Del'} handleClick={deleteLast} type={'method'} />
      <Button value={'%'} handleClick={() => method('%')} type={'method'} />
      <Button value={'/'} handleClick={() => method('/')} type={'method'} />
      <Button value={7} handleClick={() => number(7)} />
      <Button value={8} handleClick={() => number(8)} />
      <Button value={9} handleClick={() => number(9)} />
      <Button value={'X'} handleClick={() => method('*')} type={'method'} />
      <Button value={4} handleClick={() => number(4)} />
      <Button value={5} handleClick={() => number(5)} />
      <Button value={6} handleClick={() => number(6)} />
      <Button value={'+'} handleClick={() => method('+')} type={'method'} />
      <Button value={1} handleClick={() => number(1)} />
      <Button value={2} handleClick={() => number(2)} />
      <Button value={3} handleClick={() => number(3)} />
      <Button value={'-'} handleClick={() => method('-')} type={'method'} />
      <Button value={0} handleClick={() => number(0)} type={'span-2'} />
      <Button value={'.'} handleClick={() => number('.')} />
      <Button value={'='} handleClick={calculate} type={'result'} />
    </div>
  )
}

export default Functioning
