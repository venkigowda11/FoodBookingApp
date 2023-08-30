import styles from "@/styles/Add.module.css";

export default function AddButton({ setClose }) {
  return (
    <div className={styles.mainAddButton} onClick={() => setClose(false)}>
      Add new Pizza
    </div>
  );
}
