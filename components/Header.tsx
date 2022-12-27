import styles from '../styles/Header.module.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1><Link href={'/'}>AIChef 🍳</Link></h1>
      <div className={styles.menuDesktop}>
        <ul>
          <li>Favorites</li>
          <li><Link href={'/history'}>History</Link></li>
          <li>About</li>
        </ul>
      </div>
      <div className={styles.menuMobile}>
        test
      </div>
    </header>
  )
}

export default Header;