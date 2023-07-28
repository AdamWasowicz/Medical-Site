import styles from './navigation.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Navigation: React.FC = () => {
    const router = useRouter();
    const currentRoute = router.asPath;


    return (
        <header className={styles.header}>
            <Link className={styles.logo} href='/'>GoodMed+</Link>
            

            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><Link className={`${styles.navItem} ${currentRoute == '/about-us' ? styles.navItemSelected : ''}`} href='/about-us'>O nas</Link></li>
                    <li><Link className={`${styles.navItem} ${currentRoute == '/pricing' ? styles.navItemSelected : ''}`} href='/pricing'>Cennik</Link></li>
                    <li><Link className={`${styles.navItem} ${currentRoute == '/contact' ? styles.navItemSelected : ''}`} href='/contact'>Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;