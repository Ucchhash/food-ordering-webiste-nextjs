import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = ({ data }) => {
  const { id, imgSrc, title, price } = data;
  const router = useRouter();
  return (
    <div
      className={styles.container}
      onClick={() => router.push(`/products/${id}`)}
    >
      <Image src={imgSrc} alt="" width="500" height="500" />
      <a href="">
        <h1 className={styles.title}>{title}</h1>
      </a>
      <span className={styles.price}>${price}</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
