import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.body}>
      <form>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Header