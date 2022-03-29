import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
    const pizzaImages = [
        "/img/1.png",
        "/img/2.png",
        "/img/3.png",
        "/img/4.png",
        "/img/5.png",
        "/img/6.png",
        "/img/7.png",
        "/img/8.png",
    ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
          {pizzaImages.map((img,i)=>
            <PizzaCard img={img} key={i}/>
          )}
      </div>
    </div>
  );
};

export default PizzaList;