import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function () {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            alt="tele"
            width="32"
            height="32"
          ></Image>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>+91 0123456789</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            <li className={styles.listItem}>Products</li>
          </Link>

          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" width="200" height="69"></Image>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href={"/cart"} passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" width="30" height="30"></Image>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
