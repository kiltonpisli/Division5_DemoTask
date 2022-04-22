import React from 'react'
import { Movie as MovieModel } from '../../models/response.model'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from './Movie.module.css';

interface Props{
    movie: MovieModel
}

const Movie = ({movie}: Props) => {
    const imgUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`

    return (
        <div className={styles.movie}>
            <img src={imgUrl} className={styles.img} />
            <p className={styles.p}>
                <FontAwesomeIcon icon={faStar} className={styles.star} /> {movie.vote_average}/10  ({movie.vote_count} rates)
            </p>
            <h4 className={styles.h4}>{movie.title}</h4>
        </div>
    )
}

export default Movie