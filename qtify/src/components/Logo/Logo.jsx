import React from 'react'
import LogoImage from '../../assets/Group 3748.png'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <img className={styles.logo} src={LogoImage} alt='Logo' />
  )
}

export default Logo