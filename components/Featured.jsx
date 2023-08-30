import styles from "../styles/Featured.module.css";
import Image from "next/image";

export default function Featured() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.imgFeatured}
            src="/img/featured2.png"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
