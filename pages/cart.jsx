import OrderDetail from "@/components/OrderDetail";
import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import { reset } from "@/redux/cartSlice";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  async function createOrder(data) {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      console.log(res);
      res.status === 201 && router.push("/orders/" + res.data._id);
      dispatch(reset());
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
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
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td className={styles.data}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </div>
                </td>
                <td className={styles.data}>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td className={styles.data}>
                  <span className={styles.extras}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}, </span>
                    ))}
                  </span>
                </td>
                <td className={styles.data}>
                  <span className={styles.price}>{product.price} Rs</span>
                </td>
                <td className={styles.data}>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td className={styles.data}>
                  <span className={styles.total}>
                    {product.quantity * product.price}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>Rs {cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>Rs 0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>Rs {cart.total}
          </div>
          {open ? (
            <button className={styles.payButton} onClick={() => setCash(true)}>
              CASH ON DELIVERY
            </button>
          ) : (
            <button className={styles.button} onClick={() => setOpen(true)}>
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>

      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
  );
}
