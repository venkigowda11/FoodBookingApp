import { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";

export default function Product({ pizza }) {
  const [size, setSize] = useState(0);
  const [price, SetPrice] = useState(pizza.prices[0]);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function changePrice(number) {
    SetPrice(price + number);
  }

  function handleSize(sizeIndex) {
    const diff = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(diff);
  }

  function handleChange(e, option) {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...extras, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  }
  function handleClick() {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>Rs.{price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" />
            <span className={styles.number}>Small </span>
          </div>
          <div className={styles.size}>
            <Image
              src="/img/size.png"
              layout="fill"
              onClick={() => handleSize(1)}
            />
            <span className={styles.number}>Medium </span>
          </div>
          <div className={styles.size}>
            <Image
              src="/img/size.png"
              layout="fill"
              onClick={() => handleSize(2)}
            />
            <span className={styles.number}>Large </span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => {
            return (
              <div className={styles.option} key={option._id}>
                <input
                  type="checkbox"
                  name={option.text}
                  id={option.text}
                  className={styles.checkbox}
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor="double">{option.text}</label>
              </div>
            );
          })}
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <div className={styles.button} onClick={handleClick}>
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};
