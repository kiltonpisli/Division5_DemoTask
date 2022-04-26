import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import Movie from '../../components/Movie';
import styles from './Search.module.css';
import { useGetMoviesBySearchQuery } from '../../redux/services/api';
import useInfiniteScrolling from '../../customHooks/useInfiniteScrolling';

const Search = () => {
    const { toSearch } = useParams();
    const { data, isSuccess, isLoading, isError} = useGetMoviesBySearchQuery(toSearch!);
    const { moviesToShow } = useInfiniteScrolling(data?.results, 10, 5);

    // console.log(data);

    return (
        <>
            <Banner />

            {isLoading && (
                <p>Loading...</p>
            )}

            {isSuccess && (
                <div className={styles.flexbox}>
                    {(data?.total_results === 0) && (
                        <h1>0 Items</h1>
                    )}
                    
                    {moviesToShow?.map(movie => (
                    <Link key={movie.id} className={styles.a} to={`/movie/${movie.id}`}>
                        <Movie movie={movie}/>
                    </Link>
                    ))}
                </div>
            )}
        </>
    )
}

export default Search