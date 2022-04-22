import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import Movie from '../../components/Movie';
import styles from './Category.module.css';
import { useGetMoviesByCategoryQuery } from '../../redux/services/api';

const Category = () => {
    const { id } = useParams();
    const { data, isSuccess, isLoading, isError} = useGetMoviesByCategoryQuery(id!);

    console.log(data);

    return (
        <>
            <Banner img={data?.poster_path} />

            {isLoading && (
                <p>Loading...</p>
            )}

            {isSuccess && (
                <div className={styles.flexbox}>
                    {data?.items.map(movie => (
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