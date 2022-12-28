import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import NavMenu from './NavMenu';

export const Header = () => {
  const [mobileMenuOpened,setMobileMenuOpened] = useState(false);
  return (
    <header className={styles.container}>
      <h1><Link href={'/'}>AIChef 🍳</Link></h1>
      <div className={styles.menuDesktop}>
        <NavMenu/>
      </div>
      <div className={styles.menuMobileIcon} onClick={()=>setMobileMenuOpened(prev=>!prev)}>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      <div className={styles.menuMobile + ' ' + (mobileMenuOpened ? styles.show : '')}>
        <FontAwesomeIcon icon={faXmark} onClick={()=>setMobileMenuOpened(false)}/>
        <NavMenu/>
      </div>
    </header>
  )
}

export default Header;