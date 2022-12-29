import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import NavMenu from './NavMenu';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Header = () => {
  const [mobileMenuOpened,setMobileMenuOpened] = useState(false);
  return (
    <header className={styles.container}>
      <h1><Link href={'/'}><span style={{color:'var(--buttons)'}}>AI</span>Chef 🍳</Link></h1>
      <div className={styles.menuDesktop}>
        <NavMenu/>
      </div>
      <div className={styles.menuMobileIcon} onClick={()=>setMobileMenuOpened(prev=>!prev)}>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      <div className={styles.menuMobile + ' ' + (mobileMenuOpened ? styles.show : '')}>
        <FontAwesomeIcon icon={faXmark} onClick={()=>setMobileMenuOpened(false)}/>
        <h2><span style={{color:'var(--buttons)'}}>AI</span>Chef 🍳</h2>
        <NavMenu/>
        <ul className='social'>
    <li><Link href={'https://github.com/gateniomer/AIChef'}><FontAwesomeIcon icon={faGithub}/></Link></li>
    <li><Link href={'https://www.linkedin.com/in/omer-gatenio/'}><FontAwesomeIcon icon={faLinkedin}/></Link></li>
    <li><Link href={'https://wa.me/+972544930243'}><FontAwesomeIcon icon={faWhatsapp}/></Link></li>
  </ul>
      </div>
    </header>
  )
}

export default Header;