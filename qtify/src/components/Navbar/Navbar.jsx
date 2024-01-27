import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Search from '../Search/Search'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <Logo />
    <Search placeholder="Search a album of your choice"/>
    <Button text="Give Feedback"/>
    </nav>
  )
}

export default Navbar