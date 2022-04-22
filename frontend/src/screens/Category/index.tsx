import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import styles from './Category.module.css';
import { useGetMoviesByCategoryQuery } from '../../redux/services/api';

const Category = () => {
    const { id } = useParams();
    const { data, isSuccess, isLoading, isError} = useGetMoviesByCategoryQuery(id!);

    // console.log(data);

    return (
        <>
            <Banner />

            {isLoading && (
                <p>Loading...</p>
            )}

            {isSuccess && (
                <ul>
                    {data?.items.map(movie => (
                        <li key={movie.id}><Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Category