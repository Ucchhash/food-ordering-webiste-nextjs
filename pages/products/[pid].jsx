import Loader from 'components/Loader';
import pizzas from 'data/pizzas';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import styles from '../../styles/Product.module.css';
import Notification from './Notification';

const Product = () => {
  const [size, setSize] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const [cookies, setCookie] = useCookies(['pizzariaCartData']);
  const [isProductAdded, setProductAdded] = useState(false);
  const router = useRouter();
  const { pid } = router.query;
  const pizza = pizzas[pid];

  const handleAddToCart = () => {
    const selectedOption = [
      ...document.querySelectorAll('input[type=checkbox]'),
    ]
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.dataset.id);
    // console.log('selected option', selectedOption);
    const productObject = {
      itemId: pid,
      name: pizza.name,
      price: pizza.price[size],
      selectedOption: selectedOption,
      quantity: quantity,
    };

    // console.log(productObject);
    const existingCart = cookies.pizzariaCartData || [];
    const updatedCart = [...existingCart, productObject];
    setCookie('pizzariaCartData', updatedCart, { path: '/' });
    setProductAdded(true);
    setTimeout(() => {
      setProductAdded(false);
    }, 1500);
  };

  if (!pid) {
    return <Loader />;
  }

  return (
    <div>
      {isProductAdded && <Notification />}
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src={pizza.img} alt="" layout="fill" />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{pizza.name}</h1>
          <span className={styles.price}>${pizza.price[size]}</span>
          <p className={styles.desc}>{pizza.description}</p>
          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}>
            <div className={styles.size} onClick={() => setSize('small')}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>Small</span>
            </div>
            <div className={styles.size} onClick={() => setSize('medium')}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>Medium</span>
            </div>
            <div className={styles.size} onClick={() => setSize('large')}>
              <Image src="/img/size.png" layout="fill" alt="" />
              <span className={styles.number}>Large</span>
            </div>
          </div>
          <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="double"
                name="double"
                data-id="Double Ingredients"
                className={styles.checkbox}
              />
              <label htmlFor="double">Double Ingredients</label>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="cheese"
                name="cheese"
                data-id="Extra Cheese"
                className={styles.checkbox}
              />
              <label htmlFor="cheese">Extra Chesse</label>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="garlic"
                name="garlic"
                data-id="Garlic Sauce"
                className={styles.checkbox}
              />
              <label htmlFor="garlic">Garlic Sauce</label>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="spicy"
                name="spicy"
                data-id="Spicy Sauce"
                className={styles.checkbox}
              />
              <label htmlFor="spicy">Spicy Sauce</label>
            </div>
          </div>
          <div className={styles.add}>
            <input
              type="number"
              defaultValue={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={styles.quantity}
            />
            <button className={styles.button} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
