import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

export default function PizzaList({ pizzaList }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Pizza in Town</h1>
      <p className={styles.desc}>
        Nestled in the heart of our charming town, Where foodies gather and
        cravings are known, Lies a pizza that wears a golden crown, Its
        reputation and taste widely grown. Each slice a symphony of flavors so
        divine, From the crispy crust to the cheese that's prime, No doubt
        remains, it's the best you'll find, This pizza sensation is truly
        sublime!
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}
