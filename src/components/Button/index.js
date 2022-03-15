import styles from './style.module.css'

function Button(props) {
  const { value, handleClick, type } = props

  return (
    <button
      className={
        type === 'method'
          ? styles.method
          : type === 'result'
          ? styles.result
          : type === 'span-2'
          ? styles.span2
          : ''
      }
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default Button
