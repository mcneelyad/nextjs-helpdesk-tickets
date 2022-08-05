import Link from 'next/link';

import styles from '../styles/navbar.module.css';

const Navbar = () => {
    const routes = [
        {
            id: 1,
            path: '/ticket/new',
            label: 'Submit a Ticket'
        },
        {
            id: 2,
            path: '/login',
            label: "Signup / Login"
        },
    ]
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLeft}>
                <div className="logo">
                    <Link href='/'>
                        <a>logo</a>
                    </Link>
                </div>
            </div>
            <div className="navbar-right">
                <div className={styles.navbarItems}>
                    {routes.map((route) => {
                        return (
                            <div key={route.id} className={styles.navbarItem}>
                                <Link href={route.path}>
                                    <a>{route.label}</a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navbar;