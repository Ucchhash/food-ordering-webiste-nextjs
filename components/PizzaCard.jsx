import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = ({ data }) => {
  const { imgSrc, title, price } = data;

  return (
    <Link
      href={`/products/${title.toLowerCase().replace(/\s/g, '-')}`}
      passHref
    >
      <div className={styles.container}>
        <Image src={imgSrc} alt={title} width="500" height="500" />
        <a href="">
          <h1 className={styles.title}>{title}</h1>
        </a>
        <span className={styles.price}>${price}</span>
      </div>
    </Link>
  );
};

export default PizzaCard;
