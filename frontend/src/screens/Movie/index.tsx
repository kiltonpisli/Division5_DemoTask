import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Banner from '../../components/Banner';
import styles from './Movie.module.css';
import { useGetMoviesDetailsQuery } from '../../redux/services/api';

const Movie = () => {
    const { id } = useParams();
    const { data, isSuccess, isLoading } = useGetMoviesDetailsQuery(id!);

    // console.log(data);

    return (
        <>
            <Banner img={data?.belongs_to_collection?.backdrop_path}/>

            {isLoading && (
                <p>Loading...</p>
            )}

            {isSuccess && (
                <div className={styles.flexbox}>
                    <div className={styles.poster}>
                        <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} width="300px" alt='backdrop image'/>
                    </div>
                    
                    <div className={styles.detals}>
                        <h1>{data?.title}</h1>

                        <p className={styles.p}>
                            <FontAwesomeIcon icon={faStar} className={styles.star} /> {data?.vote_average}/10  ({data?.vote_count} rates)
                        </p>

                        <h3>Overview:</h3>
                        <p>{data?.overview}</p>

                        <h3>Release Date:</h3>
                        <p>{data?.release_date}</p>

                        <h3>Run Time:</h3>
                        <p>{data?.runtime}m</p>

                        <h3>Tagline:</h3>
                        <p>{data?.tagline}</p>

                        <h3>Genres:</h3>
                        {data?.genres.map(cat => (
                            <Link key={cat.id} className={styles.category} to={`/category/${cat.id}`}>
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Movie