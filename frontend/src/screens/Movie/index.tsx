import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useGetMoviesDetailsQuery } from '../../redux/services/api';

const Movie = () => {
    const { id } = useParams();
    const { data, isSuccess, isLoading, isError} = useGetMoviesDetailsQuery(id!);

    // console.log(data);

    return (
        <div>
            {isLoading && (
                <p>Loading...</p>
            )}

            {isSuccess && (
                <h1>{data?.title}</h1>
            )}
        </div>
    )
}

export default Movie