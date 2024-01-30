import styles from "./navbar.module.css";

function NavBar({ children }) {
  return <nav className={styles["nav-bar"]}>{children}</nav>;
}

export default NavBar;
