import Image from 'next/image';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [cookies] = useCookies(['pizzariaCartData']);
  const { pizzariaCartData } = cookies;
  return (
    <div className={styles.container}>
      {/* call and order now */}
      <nav className={styles.innerContainer}>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <Image
              src="/img/telephone-cta.png"
              width="32"
              height="32"
              alt="call-cta"
            />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!!</div>
            <div className={styles.text}>0123 456 78</div>
          </div>
        </div>
        {/* logo and menu links */}
        <div className={styles.item}>
          <ul className={styles.list}>
            <Link href="/">
              <a>
                <Image src="/img/logo.png" alt="" width={220} height={90} />
              </a>
            </Link>
          </ul>
        </div>
        {/* cart button */}
        <div className={styles.item}>
          <div className={styles.cart}>
            <Link href="/cart" passHref>
              <div>
                <Image src="/img/cart.png" alt="" width="35px" height="35px" />
                <div className={styles.counter}>
                  {pizzariaCartData?.length || 0}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
