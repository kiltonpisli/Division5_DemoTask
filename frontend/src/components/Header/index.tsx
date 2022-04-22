import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css';

const Header = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  }

  return (
    <div className={styles.body}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input type="text" onChange={handleChange} placeholder='Search for Movie...' className={styles.input}/>
        <button type="submit" className={styles.submit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  )
}

export default Header