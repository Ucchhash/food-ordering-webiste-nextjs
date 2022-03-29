import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"
import Hero from "./Hero"

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
        "/img/1.png",
        "/img/8.png",
        "/img/2.png",
        "/img/4.png",
        "/img/5.png",
        "/img/6.png",
        "/img/3.png",
        "/img/7.png",
        "/img/1.png",
        "/img/3.png",
        "/img/2.png",
        "/img/7.png",
    ];
  return (
    <div className={styles.container}>
      <Hero/>
      <div className={styles.wrapper}>
          {pizzaImages.map((img,i)=>
            <PizzaCard img={img} key={i}/>
          )}
      </div>
    </div>
  );
};

export default PizzaList;