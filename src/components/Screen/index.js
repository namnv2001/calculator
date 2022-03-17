import { useContext } from 'react'
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import CalContext from '../../context/CalContext'
import styles from './style.module.css'

function Screen() {
  const { result, calculation, prevCalculation, mode, setMode } =
    useContext(CalContext)

  const handleChangeMode = () => {
    setMode(mode === 'app' ? 'app dark' : 'app')
  }

  return (
    <div className={styles.screen}>
      <div className={styles.mode} onClick={handleChangeMode}>
        {mode === 'app dark' ? <BsFillSunFill /> : <BsMoonStarsFill />}
      </div>
      <div className={styles.numbers}>
        <div className={styles.result}>{result}</div>
        <div className={styles.calculation}>{calculation}</div>
        <div className={styles.calculation}>{prevCalculation}</div>
      </div>
    </div>
  )
}

export default Screen
