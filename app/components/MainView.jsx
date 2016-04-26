import React, { PropTypes } from 'react'
import styles from '../styles/main.css';

function MainView(props) {
  return (
    <div className={styles.body}>
      {props.children}
    </div>
  )
}

export default MainView
