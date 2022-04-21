import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useGetCategoriesQuery } from '../../redux/services/api';

const Home = () => {
  const { data, isSuccess, isLoading, isError} = useGetCategoriesQuery();

  return (
    <div className={styles.body}>
      {isLoading && (
        <p>Loading...</p>
      )}

      {isSuccess && (
        <ul>
          {data.genres.map(cat => (
            <li key={cat.id}><Link to={`/category/${cat.id}`}>{cat.name}</Link></li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home