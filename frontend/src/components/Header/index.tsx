import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { addSearch, deleteSearch, getAllSearch } from '../../redux/reducers/search';
import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchHistory = useSelector(getAllSearch);
  useEffect(() => {
    console.log(searchHistory);
  }, [searchHistory])
  
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(search.length > 0){
      dispatch(addSearch(search));
      navigate(`/search/${search}`);
    }else{
      navigate("/");
    }
  }

  const handleDelete = (id: string) => {
    dispatch(deleteSearch(id));
  }

  return (
    <div className={styles.body}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input 
          type="text" onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          placeholder='Search for Movie...' 
          className={styles.input}
        />
        <button type="submit" className={styles.submit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <ul className={`${styles.search_history} ${(focused)?styles.active:""}`}>
        {searchHistory.map(item => (
          <li key={item.id}>
            <Link to={`/search/${item.id}`}>{item.value}</Link> 
            <FontAwesomeIcon icon={faXmark} onClick={() => handleDelete(item.id)}></FontAwesomeIcon>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header