import styles from "./box.module.css";

function Box({ children }) {
  return <div className={styles["box"]}>{children}</div>;
}

export default Box;
