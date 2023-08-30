import styles from "../styles/Footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" objectFit="cover"></Image>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>"Pizza for your Craving's."</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find our Restaurant</h1>
          <p className={styles.textAddress}>
            Street: 12 1st Cross Road, B.S.K 1st Stage City: Bengaluru Karnataka
            Zip/Postcode: 560049 Country: India
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working hours</h1>
          <p className={styles.text}>
            MONDAY TO FRIDAY
            <br />
            9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY-FRIDAY
            <br />
            9:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  );
}
