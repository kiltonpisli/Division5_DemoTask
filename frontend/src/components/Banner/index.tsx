import React from 'react'
import Background from '../../img/banner1.jpg';
import styles from './Banner.module.css'

interface Props{
    img?: string
}

const Banner = ({ img } :Props) => {
  const url = img ? `https://image.tmdb.org/t/p/original/${img}` : Background;

  return (
    <div className={styles.body}>
        <img src={url} className={styles.img} />
    </div>
  )
}

export default Banner