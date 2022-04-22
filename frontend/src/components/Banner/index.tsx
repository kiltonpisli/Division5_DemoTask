import React from 'react'
import Background from '../../img/banner1.jpg';
import styles from './Banner.module.css'

interface Props{
    img?: string
}

const Banner = ({ img = Background } :Props) => {
  return (
    <div className={styles.body}>
        <img src={img} className={styles.img} />
    </div>
  )
}

export default Banner