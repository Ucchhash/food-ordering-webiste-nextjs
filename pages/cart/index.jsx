import pizzas from 'data/pizzas';
import Image from 'next/image';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import { AiFillDelete } from 'react-icons/ai';
import styles from '/styles/Cart.module.css';

const Cart = () => {
  const [cookies, setCookie] = useCookies(['pizzariaCartData']);
  const { pizzariaCartData } = cookies;
  // console.log('cookies', pizzariaCartData);

  if (pizzariaCartData) {
    const totalPrice = pizzariaCartData.reduce((acc, product) => {
      const productPrice = product.price * product.quantity;
      return acc + productPrice;
    }, 0);
  }

  const removeItem = (itemToRemove) => {
    // console.log(itemToRemove);
    const newCartData = pizzariaCartData.filter(
      (cartItem) => cartItem !== itemToRemove
    );
    setCookie('pizzariaCartData', newCartData, { path: '/' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {pizzariaCartData && pizzariaCartData.length ? (
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              {pizzariaCartData.map((data, i) => {
                return (
                  <tr key={i} className={styles.tr}>
                    <td>
                      <div className={styles.imgContainer}>
                        <Image
                          src={pizzas[data.itemId].img}
                          layout="fill"
                          objectFit="cover"
                          alt={pizzas[data.itemId].img}
                        />
                      </div>
                    </td>
                    <td>
                      <Link href={`/products/${data.itemId}`} passHref>
                        <span className={styles.name}>{data.name}</span>
                      </Link>
                    </td>
                    <td>
                      <span className={styles.extras}>
                        {data.selectedOption.length
                          ? data.selectedOption.toString()
                          : 'No Extras'}
                      </span>
                    </td>
                    <td>
                      <span className={styles.price}>${data.price}</span>
                    </td>
                    <td>
                      <span className={styles.quantity}>{data.quantity}</span>
                    </td>
                    <td>
                      <span className={styles.total}>
                        ${data.price * data.quantity}
                      </span>
                    </td>
                    <td>
                      <button
                        className={styles.delete}
                        onClick={() => removeItem(data)}
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className={styles.emptyCart}>
            <h2>There is no item in the cart.</h2>
            <h2>Please add some of our delicious Pizza</h2>
            <Link href="/" passHref>
              <span className={styles.button}>Go to Shop</span>
            </Link>
          </div>
        )}
      </div>
      {/* {cart} */}
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <p className={styles.totalTextTitle}>
              <strong>Subtotal:</strong>
            </p>
            <p>{pizzariaCartData ? `$${totalPrice.toFixed(2)}` : '$0.00'}</p>
          </div>
          <div className={styles.totalText}>
            <p className={styles.totalTextTitle}>
              <strong>Discount:</strong>
            </p>
            <p>{pizzariaCartData ? '$0.00' : '$0.00'}</p>
          </div>
          <div className={styles.totalText}>
            <p className={styles.totalTextTitle}>
              <strong>Total:</strong>
            </p>
            <p>{pizzariaCartData ? `$${totalPrice.toFixed(2)}` : '$0.00'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
