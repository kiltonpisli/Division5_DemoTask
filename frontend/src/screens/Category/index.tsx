import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useGetMoviesByCategoryQuery } from '../../redux/services/api';

const Category = () => {
    const { id } = useParams();
    const { data, isSuccess, isLoading, isError} = useGetMoviesByCategoryQuery(id!);

    // console.log(data);

    return (
        <div>
            {isLoading && (
                <p>Loading...</p>
            )}

            {isSuccess && (
                <ul>
                    {data.items.map(movie => (
                        <li key={movie.id}><Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Category