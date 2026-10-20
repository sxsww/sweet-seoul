import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <a href={import.meta.env.BASE_URL} className={styles.logo}>
            <img src={logo} alt="Сладкий Сеул" />
          </a>

          <nav className={styles.nav}>
            <a href={import.meta.env.BASE_URL} className={styles.active}>
              Главная
            </a>

            <a href="#">Каталог</a>
            <a href="#">Корзина</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
