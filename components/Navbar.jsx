import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            {/* call and order now */}
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone-cta.png" width="32" height="32" alt="call-cta"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!!</div>
                    <div className={styles.text}>0123 456 78</div>
                </div>
            </div>
            {/* logo and menu links */}
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link href="/menus">
                            <a>Menu</a>
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/recommend">
                            <a>Best Seller</a>
                        </Link>
                    </li>
                    <Link href="/">
                        <a><Image src="/img/logo.png" alt="" width="160px" height="60px"/></a>
                    </Link>
                    <li className={styles.listItem}>
                        <Link href="/cart">
                            <a>Cart</a>
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/orders/1">
                            <a>Orders</a>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* cart button */}
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Link href="/cart">
                        <div>
                            <Image src="/img/cart.png" alt="" width="35px" height="35px"/>
                            <div className={styles.counter}>2</div>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}
export default Navbar;
