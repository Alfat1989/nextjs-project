import Link from "next/link"
import styles from './TheHeader.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navList}>
                <Link className={styles.link} href='/'>Home</Link>
                <Link className={styles.link} href='/blog'>Blog</Link>
                <Link className={styles.link} href='/about'>About</Link>
            </nav>
        </header>
    )
}