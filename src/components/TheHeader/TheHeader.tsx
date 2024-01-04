import styles from './TheHeader.module.css'
import { Navigation } from "../Navigation/Navigation"

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
]

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navList}>
                <Navigation navLinks={navItems} />
            </nav>
        </header>
    )
}