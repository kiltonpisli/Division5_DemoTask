import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { addSearch, deleteSearch, getSearchHistory } from '../../redux/reducers/search';
import { useLazyGetMoviesBySearchQuery } from '../../redux/services/api';
import { Movie } from '../../models/response.model';
import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchHistory = useSelector(getSearchHistory);

  const [search, setSearch] = useState("");
  const [liveSearch, setLiveSearch] = useState<Movie[]>();
  const [focused, setFocused] = useState(false);
  
  const [liveSearchTrigger, searchResponse] = useLazyGetMoviesBySearchQuery();
  
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);

    liveSearchTrigger(e.currentTarget.value).unwrap().then(() => {
      const autocomplete = searchResponse?.data?.results.slice(0, 3);
      setLiveSearch(autocomplete);
    });
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

  const handleDelete = (value: string) => {
    dispatch(deleteSearch(value));
  }

  return (
    <div className={styles.body}>
      <form className={styles.form} onSubmit={handleSearch}>
        <Link to="/">
          <FontAwesomeIcon icon={faHouseChimney} />
        </Link>
        <input 
          type="text" onChange={onChange} onFocus={() => setFocused(true)} 
          onBlur={() => {
            setTimeout(() => {setFocused(false)}, 300) 
          }}
          placeholder='Search for Movie...' 
          className={styles.input}
        />
        <button type="submit" className={styles.submit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

      <ul className={`${styles.search_history} ${(focused)?styles.active:""}`}>
        {liveSearch?.map((item, i) => (
          <li key={i}>
            <Link to={`/movie/${item.id}`}><b>{item.title}</b></Link>
          </li>
        ))}
        {searchHistory.map((item, i) => (
          <li key={i}>
            <Link to={`/search/${item}`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />{item}
            </Link>
            <FontAwesomeIcon icon={faXmark} onClick={() => handleDelete(item)}></FontAwesomeIcon>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header