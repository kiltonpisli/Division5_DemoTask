import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import Movie from '../../components/Movie';
import styles from './Category.module.css';
import { useGetMoviesByCategoryQuery } from '../../redux/services/api';
import useInfiniteScrolling from '../../customHooks/useInfiniteScrolling';

const Category = () => {
    const { id } = useParams();
    const { data, isSuccess, isLoading} = useGetMoviesByCategoryQuery(id!);
    const { moviesToShow } = useInfiniteScrolling(data?.items, 20, 20);

    return (
        <>
            <Banner img={data?.poster_path} />

            {isLoading && (
                <p>Loading...</p>
            )}

            {isSuccess && (
                <div className={styles.flexbox}>
                    {(data?.item_count === 0) && (
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

export default Category