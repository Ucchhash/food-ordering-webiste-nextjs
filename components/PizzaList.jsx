import styles from '../styles/PizzaList.module.css';
import Hero from './Hero';
import PizzaCard from './PizzaCard';

const PizzaList = ({ data }) => {
  const pizzaImages = [
    {
      id: 1,
      title: 'Fiery Diablo Pizza',
      imgSrc: '/img/1.png',
      price: '19.99',
    },
    {
      id: 2,
      title: 'Mediterranean Delight Pizza',
      imgSrc: '/img/2.png',
      price: '24.99',
    },
    {
      id: 3,
      title: 'Cheesy Bacon Bliss Pizza',
      imgSrc: '/img/3.png',
      price: '14.99',
    },
    {
      id: 4,
      title: 'Veggie Garden Supreme Pizza',
      imgSrc: '/img/4.png',
      price: '14.99',
    },
    {
      id: 5,
      title: 'Hawaiian Luau Pizza',
      imgSrc: '/img/5.png',
      price: '14.99',
    },
    {
      id: 6,
      title: 'BBQ Chicken Ranch Pizza',
      imgSrc: '/img/6.png',
      price: '19.99',
    },
    {
      id: 7,
      title: 'Pesto Portobello Paradise Pizza',
      imgSrc: '/img/7.png',
      price: '19.99',
    },
    {
      id: 8,
      title: 'Spicy Sausage Fiesta Pizza',
      imgSrc: '/img/8.png',
      price: '19.99',
    },
  ];
  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.wrapper}>
        {pizzaImages.map((pizza, i) => (
          <PizzaCard data={pizza} key={i} id={pizza.id} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
