import React from 'react';
import {hot} from 'react-hot-loader/root'
import styles from './app.less';

function App () {
  return (
      <div className={styles.title}>
        hello react
      </div>
  )
}

export default hot(App);