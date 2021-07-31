import React from 'react'
import styles from './styles.module.css'

export const Pixton = (props) => {
  return (
    <button {...props} className={`${styles.btn} ${styles[props.type]}`}>
      {props.children}
    </button>
  )
}
