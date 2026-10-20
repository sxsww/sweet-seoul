import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <a href={import.meta.env.BASE_URL} className={styles.logo}>
              <img src={logo} alt="Сладкий Сеул" />
            </a>

            <p className={styles.description}>
              Маленькие радости с большим вкусом.
            </p>
          </div>

          <div className={styles.links}>
            <h3 className={styles.heading}>МАГАЗИН</h3>

            <nav className={styles.nav}>
              <a href={import.meta.env.BASE_URL}>Главная</a>
              <a href="#">Каталог</a>
              <a href="#">Корзина</a>
            </nav>
          </div>

          <div className={styles.contacts}>
            <h3 className={styles.heading}>НА СВЯЗИ</h3>

            <a href="mailto:hello@sladkiy-seoul.ru">hello@sladkiy-seoul.ru</a>

            <p>Telegram: @sladkiy_seoul</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 СЛАДКИЙ СЕУЛ</p>
          <p>Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
