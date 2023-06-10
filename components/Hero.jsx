import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>THE BEST PIZZA IN TOWN</div>
      <p className={styles.desc}>
        Welcome to <span>Pizzaria</span>, a New York institution serving up
        delectable pizzas for over 50 years. Our time-tested recipes and
        commitment to quality have made us a beloved destination for pizza
        enthusiasts. Join us to experience the flavors and traditions that have
        made us a cornerstone of the New York dining scene.
      </p>
    </div>
  );
};

export default Hero;
