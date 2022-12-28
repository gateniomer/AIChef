import Link from "next/link";
import styles from '../styles/NavMenu.module.css'

export const NavMenu = () => {
  return (<nav className={styles.container}>
    <ul>
      <li><Link href={'/favorites'}>Favorites</Link></li>
      <li><Link href={'/history'}>History</Link></li>
      <li>About</li>
    </ul>
  </nav>)
}

export default NavMenu;