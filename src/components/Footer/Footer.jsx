import { Link } from "react-router";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="Сладкий Сеул" />
            </Link>
            <p className={styles.description}>
              Маленькие радости с большим вкусом.
            </p>
          </div>
          <div className={styles.links}>
            <h3 className={styles.heading}>МАГАЗИН</h3>
            <nav className={styles.nav}>
              <Link to="/">Главная</Link>
              <Link to="/catalog">Каталог</Link>
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
