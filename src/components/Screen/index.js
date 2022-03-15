import { useContext } from 'react'
import CalContext from '../../context/CalContext'
import styles from './style.module.css'

function Screen() {
  const { result, calculation, prevCalculation } = useContext(CalContext)

  return (
    <div className={styles.screen}>
      <div className={styles.result}>{result}</div>
      <div className={styles.calculation}>{calculation}</div>
      <div className={styles.calculation}>{prevCalculation}</div>
    </div>
  )
}

export default Screen
