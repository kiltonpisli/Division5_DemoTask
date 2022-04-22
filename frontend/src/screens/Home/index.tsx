import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import bg from '../../img/banner2.jpg';
import Banner from '../../components/Banner';
import { useGetCategoriesQuery } from '../../redux/services/api';

const Home = () => {
  const { data, isSuccess, isLoading, isError} = useGetCategoriesQuery();

  return (
    <>
      <Banner />

      {isLoading && (
        <p>Loading...</p>
      )}

      {isSuccess && (
        <div className={styles.flexbox}>
          {data?.genres.map(cat => (
            <Link key={cat.id} className={styles.category} to={`/category/${cat.id}`}>
              <h3 key={cat.id} className={styles.h3}>{cat.name}</h3>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Home