import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>THE BEST PIZZA IN TOWN</div>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default Hero;