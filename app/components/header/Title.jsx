import React from 'react';
import styles from '../../styles/main.css';

function Title(props) {
  return (
    <div className={styles.title}>
      <div className={styles.leftTitle}/>
      <div className={styles.titleText}>Airport Distance Calculator</div>
      <div className={styles.rightTitle}></div>
    </div>
  );
}

export default Title
